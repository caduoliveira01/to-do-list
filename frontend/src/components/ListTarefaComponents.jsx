import { useEffect, useState } from "react";
import {
  deleteTarefa,
  listTarefas,
  getTarefaById,
} from "../services/TarefasServices";
import { useNavigate } from "react-router-dom";

const ListTarefaComponents = () => {
  const [tarefas, setTarefas] = useState([]);
  const [filterId, setFilterId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAllTarefas();
  }, []);

  function getAllTarefas() {
    listTarefas()
      .then((response) => {
        setTarefas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewTarefa() {
    navigate("/add-tarefa");
  }

  function updateTarefa(id) {
    navigate(`/edit-tarefa/${id}`);
  }

  function removeTarefa(id) {
    deleteTarefa(id)
      .then(() => {
        getAllTarefas();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function filterTarefaById() {
    if (filterId.trim() === "") {
      getAllTarefas();
      return;
    }

    getTarefaById(filterId)
      .then((response) => {
        setTarefas([response.data]);
      })
      .catch((error) => {
        console.error("Tarefa não encontrada", error);
        setTarefas([]);
      });
  }

  return (
    <div className="container">
      <h2 className="text-center">Lista de tarefas</h2>
      <div className="d-flex mb-2">
        <button className="btn btn-secondary" onClick={addNewTarefa}>
          Adicionar tarefa
        </button>
        <input
          type="text"
          className="form-control mx-2"
          placeholder="Filtrar por ID"
          value={filterId}
          onChange={(e) => setFilterId(e.target.value)}
        />
        <button className="btn btn-primary" onClick={filterTarefaById}>
          Buscar
        </button>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.id}>
              <td>{tarefa.id}</td>
              <td>{tarefa.title}</td>
              <td>{tarefa.description}</td>
              <td>{tarefa.status}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateTarefa(tarefa.id)}
                >
                  Atualizar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => removeTarefa(tarefa.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTarefaComponents;

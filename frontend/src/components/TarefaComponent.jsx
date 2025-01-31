import { useEffect, useState } from "react";
import {
  createTarefa,
  getTarefa,
  updateTarefa,
} from "../services/TarefasServices";
import { useNavigate, useParams } from "react-router-dom";

const TarefaComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const { id } = useParams();

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    status: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getTarefa(id)
        .then((response) => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setStatus(response.data.status);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateTarefa(e) {
    e.preventDefault();

    if (validateForm()) {
      const tarefa = { title, description, status };
      console.log(tarefa);

      if (id) {
        updateTarefa(id, tarefa)
          .then((response) => {
            console.log(response.data);
            navigate("/tarefas");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        createTarefa(tarefa)
          .then((response) => {
            console.log(response.data);
            navigate("/tarefas");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (title.trim()) {
      errorsCopy.title = "";
    } else {
      errorsCopy.title = "O titulo é obrigatório";
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "A descrição é obrigatória";
      valid = false;
    }

    if (status.trim()) {
      errorsCopy.status = "";
    } else {
      errorsCopy.status = "O status é obrigatório";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Atualizar tarefa</h2>;
    } else {
      return <h2 className="text-center">Adicionar tarefa</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()};
          <div className="card-body">
            <form>
              <div className="form-group">
                <label className="form-label">Titulo</label>
                <input
                  type="text"
                  placeholder="Digite o titulo"
                  name="title"
                  value={title}
                  className={`form-control ${errors.title ? "is-invalid" : ""}`}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
                {errors.title && (
                  <div className="invalid-feedback">{errors.title}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Descrição</label>
                <input
                  type="text"
                  placeholder="Digite a descrição"
                  name="description"
                  value={description}
                  className={
                    'form-control ${errors.description ? "is-invalid" : ""}'
                  }
                  onChange={(e) => setDescription(e.target.value)}
                ></input>
                {errors.description && (
                  <div className="invalid-feedback">{errors.description}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
                <input
                  type="text"
                  placeholder="Digite o status"
                  name="status"
                  value={status}
                  className={
                    'form-control ${errors.status ? "is-invalid" : ""}'
                  }
                  onChange={(e) => setStatus(e.target.value)}
                ></input>
                {errors.status && (
                  <div className="invalid-feedback">{errors.status}</div>
                )}
              </div>
              <button
                className="btn btn-secondary"
                onClick={saveOrUpdateTarefa}
              >
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarefaComponent;

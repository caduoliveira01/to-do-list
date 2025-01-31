import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/tarefas";

export const listTarefas = () => axios.get(REST_API_BASE_URL);

export const createTarefa = (tarefa) => axios.post(REST_API_BASE_URL, tarefa);

export const getTarefa = (tarefaId) =>
  axios.get(REST_API_BASE_URL + "/" + tarefaId);

export const updateTarefa = (tarefaId, tarefa) =>
  axios.put(REST_API_BASE_URL + "/" + tarefaId, tarefa);

export const deleteTarefa = (tarefaId) =>
  axios.delete(REST_API_BASE_URL + "/" + tarefaId);

export const getTarefaById = (tarefaId) =>
  axios.get(REST_API_BASE_URL + "/" + tarefaId);

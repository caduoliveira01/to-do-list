#To-do list - NewM#
Este projeto é uma lista de tarefas, feito com Spring boot, React + Vite e MySQL

#Pre-requisítos#
Node.js, npm e maven.

#Como executar#
clone o repositório
git clone https://github.com/caduoliveira01/to-do-list.git

Dentro da past backend entre em backend\src\main\java\com\dev\backend, execute o BackendApplication.java
Dentro da past frontend, execute o comando npm run dev para inicar o front que está localizado em http://localhost:3000

## Endpoints da API

| Método HTTP | Endpoint          | Descrição                                           |
|-------------|-------------------|-----------------------------------------------------|
| POST        | /tarefas          | Cria uma nova tarefa com os dados inseridos |
| GET         | /tarefas          | Retorna todas as tarefas do banco                |
| GET         | /tarefas/{tarefaId} | Retorna uma tarefa especifica pelo seu Id     |
| PUT         | /tarefas/{tarefaId} | Atualiza os dados de uma tarefa  |
| DELETE      | /tarefas/{tarefaId} | Deleta uma tarefa existente com base no ID           |

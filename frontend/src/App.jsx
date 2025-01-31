import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListTarefaComponents from "./components/ListTarefaComponents";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TarefaComponent from "./components/TarefaComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListTarefaComponents />}></Route>

          <Route path="/tarefas" element={<ListTarefaComponents />}></Route>

          <Route path="/add-tarefa" element={<TarefaComponent />}></Route>

          <Route path="/edit-tarefa/:id" element={<TarefaComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um programador full stack.",
    isCompleted: false
  },{
    id: 2,
    title: "Ler um livro",
    description: "Ler pelo menos 30 páginas de um livro de desenvolvimento pessoal.",
    isCompleted: false
  },{
    id: 3,
    title: "Praticar exercícios físicos",
    description: "Fazer uma sessão de treino funcional de 45 minutos.",
    isCompleted: false
  }])
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask/>
        <Tasks tasks={tasks}/>
      </div>
      
    </div>
  );
};

export default App;
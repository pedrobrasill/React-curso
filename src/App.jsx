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
  }]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {

    //PRECISO ATUALIZAR ESSA TAREFA
    if (task.id === taskId) {
      return {...task, isCompleted: !task.isCompleted}
    }

    //NÃO PRECISO ATUALIZAR ESSA TAREFA
    return task;
    });
    setTasks(newTasks);
  };

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task => task.id != taskId));
    setTasks(newTasks);
      
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: tasks.length +1,
      title: title,
      description: description,
      isCpmpleted: false,
    };
    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
      </div>
      
    </div>
  );
};

export default App;
import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate()

    function onSeeDetailClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (

                <li key={task.id} className="flex gap-2" >

                    <button 
                    onClick={() => onTaskClick(task.id)}
                    className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                        
                    </button>

                    <button onClick={() => onSeeDetailClick(task)} className="bg-slate-400 p-2 rounded-md text-white">
                        <ChevronRightIcon/>
                    </button>

                    <button 
                    onClick={() => onDeleteTaskClick(task.id)}
                    className="bg-slate-400 p-2 rounded-md text-white">
                        <TrashIcon/>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Tasks;
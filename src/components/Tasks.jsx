import { CheckIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();

    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-100 rounded-md shadow">
      {tasks.map((task) => (
        <li
          key={task.id}
          className="flex gap-2"
          onClick={() => onSeeDetailsClick(task)}
        >
          <button
            className={`text-white text-left bg-slate-400 p-2 rounded-md font-bold w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <CheckIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

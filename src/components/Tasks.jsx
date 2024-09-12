function Tasks(props) {
  console.log(props);
  return (
    <ul className="space-y-4">
      {props.tasks.map((task) => (
        <li
          className="text-white bg-slate-400 p-2 rounded-md font-bold"
          key={task.id}
        >
          {task.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const tasks = [
    {
      id: 1,
      title: "estudar",
      description: "estudar programação",
      isCompleted: false,
    },
    {
      id: 2,
      title: "estudar ingles",
      description: "estudar o ingles",
      isCompleted: false,
    },
    {
      id: 3,
      title: "estudar espanhol",
      description: "estudar linguas espanholas",
      isCompleted: false,
    },
    {
      id: 4,
      title: "estudar italiano",
      description: "estudar linguagem italiana",
      isCompleted: false,
    },
  ];
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <main className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks />
        <Tasks tasks={tasks} />
      </main>
    </div>
  );
}

export default App;

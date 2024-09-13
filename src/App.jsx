import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // CRIA FUNÇÃO PARA USAR ASSINCRONISMO
    async function fetchTasks() {
      // CHAMA API COM FETCH
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5",
        { method: "GET" }
      );
      // PEGA OS DADOS QUE ELA RETORNA EM JSON
      const data = await response.json();

      //ARMAZENA E PERSISTE ESSES DADOS NO STATE
      setTasks(data);
    }
    // CHAMA FUNÇÃO ASSINCRONA PARA API DE TAREFAS
    //fetchTasks();
  }, []); // se a lista no segundo parametro é vazia vai executar só na primeira vez que o usuário acessar a pagina

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <main className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        <p className="font-thin text-slate-100 font-xs">By Mateus Batista</p>
      </main>
    </div>
  );
}

export default App;

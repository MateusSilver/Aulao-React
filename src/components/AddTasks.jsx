import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-100 rounded-md shadow flex flex-col">
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md "
        type="text"
        placeholder="Digite uma nova tarefa"
        minLength={1}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md "
        type="text"
        placeholder="digite a descrição"
        minLength={1}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha os campos corretamente");
          }
          onAddTaskSubmit(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-500 text-white px-4 py-2 font-medium rounded-md "
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;

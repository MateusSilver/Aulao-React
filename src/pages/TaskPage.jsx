import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="flex justify-center w-screen h-screen bg-slate-500 p-6">
      <main className="w-[500px] space-y-4">
        <div className="flex relative justify-center">
          <button
            onClick={() => navigate(-1)}
            className="text-white absolute left-0 bottom-0 top-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-500 font-bold">{title}</h2>
          <p className="text-slate-500">{description}</p>
        </div>

        <p className="font-thin text-slate-100 font-xs">By Mateus Batista</p>
      </main>
    </div>
  );
}

export default TaskPage;

import { Trash2 } from "lucide-react";

function NoticeCard({ task, deletTask }) {
  return (
    <div className="flex justify-between items-center bg-slate-100 p-3 rounded mb-2">
      <span>{task}</span>
      <Trash2 className="text-red-500 cursor-pointer" onClick={() => deletTask(task)} />
    </div>
  );
}

export default NoticeCard;
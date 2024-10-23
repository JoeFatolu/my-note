import { FormEvent, useState } from "react";
import { todoType } from "@/types";

export const Todo = ({
  handleDeleteTodo,
  handleEditTodo,
  task,
}: {
  handleDeleteTodo: (id: number) => void;
  handleEditTodo: (id: number, title: string) => void;
  task: todoType;
}) => {
  const [title, setTitle] = useState(task.title);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleEditTodo(task.id, title.trim());
  };

  return (
    <form className="px-5 pt-7" onSubmit={handleSubmit}>
      <div className="">
        <label
          htmlFor="Task Name"
          className="mb-[15px] block text-[16px] font-normal"
        >
          Task Name
        </label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={
            "text-text-primary w-full rounded-[9px] border border-[#CBCBCB] bg-white px-[26.6px] py-5 text-lg font-normal outline-none"
          }
        />
      </div>
      <div className="absolute bottom-6 left-0 right-0 mt-auto flex items-center gap-5 px-8">
        <button
          type="button"
          color="error"
          className="text-shadow h-[3.75rem] w-[7.5625rem] rounded-md border-2 border-[#720D0D] bg-[#AB3535] text-white"
          onClick={() => handleDeleteTodo(task.id)}
        >
          Delete
        </button>
        <button
          type="submit"
          color="primary"
          className="text-shadow h-[3.75rem] w-full rounded-md border-2 border-[#0D2972] bg-[#3556AB] text-white"
          style={{
            inset: "0px 4px 4px 0px #00000040",
            boxShadow: "box-shadow: 0px 3px 1px 0px #A8B5DE80",
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

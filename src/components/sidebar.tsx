import avater from "@/assets/images/avater.png";

import { TodoList } from "./todo-lists";
import { Icons } from "./icons";
import { todoType } from "@/types";

export default function SideBar({
  todos,
  setActiveTodo,
  handleChangeStatus,
  handleAddTodo,
}: {
  todos: todoType[];
  setActiveTodo: React.Dispatch<React.SetStateAction<todoType | null>>;
  handleChangeStatus: (id: number) => void;
  handleAddTodo: () => void;
}) {
  return (
    <div
      className="relative flex max-w-[25.875rem] flex-1 flex-col bg-bg-secondary"
      style={{
        boxShadow: "0px 0px 7px 2px #00000040",
      }}
    >
      <div className="min-h-[7.6875rem] bg-bg-primary px-8 pt-5 shadow-custom">
        <div className="flex items-start gap-x-5">
          <img src={avater} alt="jhon" />

          <div>
            <h3 className="text-shadow text-base font-medium leading-[1.171875] text-white">
              Hello, Jhon
            </h3>
            <p className="text-shadow mt-2 text-[1.5625rem] font-thin italic leading-[1.0572] text-white">
              What are your plans <br /> for today?
            </p>
          </div>
        </div>
      </div>

      <div className="shadow-inset-custom relative min-h-[116px] border-2 border-[#9EB031] bg-[#CDE53D] p-8">
        <div className="flex items-center gap-6">
          {Icons.cup}
          <h4 className="text-text-primary text-shadow-white text-lg font-bold leading-[1.190625]">
            Go Pro Upgrade Now
          </h4>
        </div>
        <div className="bg-secondary font-meduim absolute -top-[2px] right-6 flex h-[4.4375rem] w-[4.4375rem] items-center justify-center bg-[#071D55] text-lg leading-[1.190625] text-[#F2C94C]">
          $1
        </div>
      </div>

      <TodoList
        todos={todos}
        setActiveTodo={setActiveTodo}
        handleChangeStatus={handleChangeStatus}
      />

      <button
        className="absolute bottom-4 right-4 flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full border-2 border-[#123EB1] bg-[#3556AB]"
        onClick={handleAddTodo}
      >
        {Icons.plus}
      </button>
    </div>
  );
}

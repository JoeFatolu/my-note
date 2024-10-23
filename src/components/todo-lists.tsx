import React from "react";
import { todoType } from "@/types";
import classNames from "classnames";
import { Icons } from "./icons";
import FlipMove from "react-flip-move";

export const TodoList = ({
  todos,
  setActiveTodo,
  handleChangeStatus,
}: {
  todos: todoType[];
  setActiveTodo: React.Dispatch<React.SetStateAction<todoType | null>>;
  handleChangeStatus: (id: number) => void;
}) => {
  return (
    <div className="custom-scroll mb-[100px] flex h-full flex-col gap-y-6 overflow-auto px-4 pt-5 border-r border-[#e5e7eb]">
      <FlipMove>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="mb-6 flex min-h-[5.6875rem] items-center justify-between gap-5 rounded-md border border-[#E7E7E7] bg-white pl-10 pr-5"
            style={{
              boxShadow: "0px 4px 4px 0px #0000001A",
            }}
          >
            <div className="flex items-center gap-[17px]">
              <div
                className="cursor-pointer"
                onClick={() => handleChangeStatus(todo.id)}
              >
                {todo.checked ? Icons.check : Icons.unCheck}
              </div>
              <h6
                className={classNames(
                  "text-base font-medium leading-4",
                  todo.checked
                    ? "text-text-secondary line-through"
                    : "text-text-primary",
                )}
              >
                {todo.title}
              </h6>
            </div>
            <button
              className="text-text-primary h-[2.8125rem] w-[3.1875rem] rounded border border-[#071D55] text-base font-medium leading-[1.171875]"
              onClick={() => {
                setActiveTodo(todo);
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </FlipMove>
    </div>
  );
};

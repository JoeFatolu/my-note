import SideBar from "@/components/sidebar";
import { Todo } from "@/components/todo";
import { useTodo } from "@/hooks/useTodo";

export const Home = () => {
  const {
    todoInView,
    setTodoInView,
    todos,
    deleteTodo,
    addTodo,
    editTodo,
    changeTodoStatus,
  } = useTodo();
  return (
    <div
      className="bg-light z-10 flex h-screen w-full"
      style={{
        boxShadow: "0px 4px 4px 0px #00000026",
      }}
    >
      <SideBar
        todos={todos}
        setActiveTodo={setTodoInView}
        handleChangeStatus={changeTodoStatus}
        handleAddTodo={addTodo}
      />

      <div className="relative grow bg-bg-secondary">
        <div className="grid min-h-[123px] place-items-center bg-bg-primary px-8 pt-5">
          <h1 className="text-shadow text-[24px] font-medium text-white">
            Edit Task
          </h1>
        </div>
        {todoInView && (
          <Todo
            task={todoInView}
            handleDeleteTodo={deleteTodo}
            handleEditTodo={editTodo}
            key={todoInView.id}
          />
        )}
      </div>
    </div>
  );
};

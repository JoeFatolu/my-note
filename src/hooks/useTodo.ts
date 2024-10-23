import { useState, useEffect } from "react";
import { todoType } from "../types";

const initialTodos: todoType[] = [
  {
    title: "Training at the Gym",
    checked: true,
    id: 1,
  },
  {
    title: "Play Paddle with friends",
    checked: false,
    id: 2,
  },
  {
    title: "Burger BBQ with family",
    checked: false,
    id: 3,
  },
];

const getTodosFromLocalStorage = (): todoType[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : initialTodos;
};

export const useTodo = () => {
  const [todos, setTodos] = useState<todoType[]>(getTodosFromLocalStorage());
  const [todoInView, setTodoInView] = useState<todoType | null>(todos[0]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setTodoInView(null);
  };

  const addTodo = () => {
    const todo = {
      title: "New Task",
      id: todos.length + 1,
      checked: false,
    };
    setTodos((prev) => [todo, ...prev]);
    setTodoInView(todo);
  };

  const editTodo = (id: number, title: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: title,
          };
        }
        return todo;
      });
    });
  };

  const changeTodoStatus = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos
        .map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              checked: !todo.checked,
            };
          }
          return todo;
        })
        .sort((a, b) => {
          if (a.checked === b.checked) {
            return b.id - a.id;
          }
          return a.checked ? 1 : -1;
        });
    });
  };

  return {
    todoInView,
    setTodoInView,
    todos,
    deleteTodo,
    addTodo,
    editTodo,
    changeTodoStatus,
  };
};

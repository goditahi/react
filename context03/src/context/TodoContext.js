import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "hello hi",
      completed: false,
    },
  ],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  toggleComplete: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};

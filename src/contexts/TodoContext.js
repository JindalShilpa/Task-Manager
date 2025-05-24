import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleCompleteTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

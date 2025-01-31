import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoStore = create(
  persist(
    (set) => ({
      todos: [],
      deletedTodos: [],

      addTodo: (text) =>
        set((state) => ({
          todos: [...state.todos, { id: Date.now(), text, completed: false }],
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        })),

      removeTodo: (id) =>
        set((state) => {
          const todoToDelete = state.todos.find((todo) => todo.id === id);
          return {
            todos: state.todos.filter((todo) => todo.id !== id),
            deletedTodos: [...state.deletedTodos, todoToDelete],
          };
        }),

      restoreTodo: (id) =>
        set((state) => {
          const todoToRestore = state.deletedTodos.find((todo) => todo.id === id);
          return {
            todos: [...state.todos, todoToRestore],
            deletedTodos: state.deletedTodos.filter((todo) => todo.id !== id),
          };
        }),
    }),
    {
      name: "todo-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useTodoStore;

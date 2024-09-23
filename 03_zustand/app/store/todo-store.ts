import { Todo } from "@/types/todo-types";
import { create } from "zustand";

export interface TodoState {
  todo: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, newTodo: Todo) => void;
  toggleTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
  todo: [],
  addTodo: (newTodo: Todo) =>
    set((state) => ({ todo: [...state.todo, newTodo] })),
  deleteTodo: (id: string) =>
    set((state) => ({ todo: state.todo.filter((todo) => todo.id !== id) })),
  updateTodo: (id: string, newTodo: Todo) =>
    set((state) => ({
      todo: state.todo.map((todo) => (todo.id === id ? newTodo : todo)),
    })),
  toggleTodo: (id: string) =>
    set((state) => ({
      todo: state.todo.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      ),
    })),
}));

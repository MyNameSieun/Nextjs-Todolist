import { sampleTodo } from "@/assets/sample-todo";
import { Todo } from "@/types/todo-types";
import { create } from "zustand";

export interface TodoState {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (id: string, newTodo: Todo) => void;
  toggleTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
  todos: [sampleTodo],
  addTodo: (newTodo: Todo) =>
    set((state) => ({ todos: [...state.todos, newTodo] })),
  deleteTodo: (id: string) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  updateTodo: (id: string, newTodo: Todo) =>
    set((state) => ({
      todos: state.todos.map((todo) => (todo.id === id ? newTodo : todo)),
    })),
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      ),
    })),
}));

import { sampleTodo } from "@/assets/sample-todo";
import { EditTodo, Todo } from "@/types/todo-types";
import { create } from "zustand";

export interface TodoState {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newTodo: EditTodo) => void;
  toggleTodo: (id: string) => void;
}

export const useTodoStore = create<TodoState>()((set) => ({
  todos: [sampleTodo],

  // todo 추가
  addTodo: (newTodo: Todo) =>
    set((state) => ({ todos: [...state.todos, newTodo] })),

  // todo 삭제
  deleteTodo: (id: string) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),

  // todo 수정
  editTodo: (id: string, newTodo: EditTodo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, ...newTodo } : todo
      ),
    })),

  // todo 토글
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      ),
    })),
}));

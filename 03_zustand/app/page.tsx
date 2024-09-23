"use client";

import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { useTodoStore } from "./store/todo-store";
import { DoneTodo, WorkingTodo } from "./types/todo-types";

const Homepage = () => {
  const { todos } = useTodoStore();
  const workingTodo = todos.filter((todo) => !todo.isDone) as WorkingTodo[];
  const doneTodo = todos.filter((todo) => todo.isDone) as DoneTodo[];

  return (
    <main>
      <TodoForm />
      <TodoList title="Working" todo={workingTodo} />
      <TodoList title="Done" todo={doneTodo} />
    </main>
  );
};

export default Homepage;

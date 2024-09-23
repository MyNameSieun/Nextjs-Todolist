"use client";

import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";
import { fetchTodos } from "@/app/api/todos";
import { Todo } from "@/app/types/todo.type";
import { useEffect, useState } from "react";
const TodoPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await fetchTodos();
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, []);

  if (loading) {
    return <p>로딩중...</p>;
  }

  // 필터링
  const inProgressTodo = todos.filter((todo) => todo.isDone === false);
  const doneTodo = todos.filter((todo) => todo.isDone === true);

  return (
    <>
      <TodoForm />
      <TodoList todoTitle="In Progress" todos={inProgressTodo} />
      <TodoList todoTitle="Done" todos={doneTodo} />
    </>
  );
};

export default TodoPage;

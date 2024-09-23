"use client";

import { fetchTodo } from "@/app/api/todos";
import { Todo } from "@/app/types/todo.type";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const response = await fetchTodo();
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

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem />
      ))}
    </div>
  );
};

export default TodoList;

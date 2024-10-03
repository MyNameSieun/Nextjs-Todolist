import TodoForm from "@/app/components/todo/TodoForm";
import TodoList from "@/app/components/todo/TodoList";
import { QUERY_KEYS } from "@/app/hooks/query/keys.constant";
import { useTodosQuery } from "@/app/hooks/query/useTodosQuery";
import { getTodos } from "@/app/services/todos";
import { DoneTodo, Todo, WorkingTodo } from "@/app/types/todo-types";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

const HomePage = async () => {
  return (
    <main>
      <TodoForm />
      <Suspense fallback={<div>로딩...</div>}>
        <TodoList title="inProgress" />
      </Suspense>
      <Suspense fallback={<div>로딩...</div>}>
        <TodoList title="isDone" />
      </Suspense>
    </main>
  );
};

export default HomePage;

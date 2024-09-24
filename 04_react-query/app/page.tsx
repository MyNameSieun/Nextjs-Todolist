"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";
import { useTodoStore } from "./store/todo-store";
import { DoneTodo, WorkingTodo } from "./types/todo-types";
import { fetchTodos } from "./api/todos";

const Homepage = async () => {
  const queryClient = new QueryClient();

  // prefetchQuery: 서버에서 미리 데이터 가져와 렌더링
  // 클라이언트 컴포넌트에서는 useQuery로 다시 가져올 필요 없고 서버에서 미리 가져다 놓은 데이터를 화면에 뿌리기만 하면 됨
  // prefetchQuery가 없으면 클라이언트 컴포넌트로 작동함
  await queryClient.prefetchQuery({
    queryKey: ["todos"],
    queryFn: () => fetchTodos,
  });

  const dehydratedState = dehydrate(queryClient);

  const { todos } = useTodoStore();
  const workingTodo = todos.filter((todo) => !todo.isDone) as WorkingTodo[];
  const doneTodo = todos.filter((todo) => todo.isDone) as DoneTodo[];

  return (
    <main>
      <HydrationBoundary state={dehydratedState}>
        <TodoForm />
        <TodoList title="Working" todo={workingTodo} />
        <TodoList title="Done" todo={doneTodo} />
      </HydrationBoundary>
    </main>
  );
};

export default Homepage;

import TodoForm from "@/app/components/todo/TodoForm";
import TodoList from "@/app/components/todo/TodoList";
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

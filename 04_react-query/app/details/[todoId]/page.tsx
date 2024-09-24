"use client";

import { useTodoStore } from "@/store/todo-store";
import { Todo } from "@/types/todo-types";
import { useParams, useRouter } from "next/navigation";

const TodoDetailPage = () => {
  const { todoId } = useParams();
  const { todos } = useTodoStore();
  const router = useRouter();

  // 해당 id에 맞는 todo를 찾기
  const todo = todos.find((todo: Todo) => todo.id === todoId);

  if (!todo) {
    return <p>Todo not found.</p>;
  }

  const { id, title, content, deadline, isDone } = todo;

  return (
    <section>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{deadline}</p>
      <p>{String(isDone)}</p>
      <button onClick={() => router.back()}>뒤로가기</button>
    </section>
  );
};

export default TodoDetailPage;

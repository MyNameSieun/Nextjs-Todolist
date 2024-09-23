"use client";

import TodoItem from "@/components/todo/TodoItem";
import { useTodoStore } from "@/store/todo-store";
import { Todo } from "@/types/todo-types";
import { useParams } from "next/navigation";

const TodoDetailPage = () => {
  const { todoId } = useParams();
  const { todos } = useTodoStore(); // todo store에서 todos 배열 가져오기

  // 해당 id에 맞는 todo를 찾기
  const findTodo = todos.find((todo: Todo) => todo.id === todoId);

  // findTodo가 없으면 로딩 처리 또는 에러 처리
  if (!findTodo) {
    return <p>Todo not found.</p>;
  }

  return (
    <div>
      <TodoItem todo={findTodo} /> {/* 찾은 findTodo를 TodoItem에 넘겨줌 */}
    </div>
  );
};

export default TodoDetailPage;

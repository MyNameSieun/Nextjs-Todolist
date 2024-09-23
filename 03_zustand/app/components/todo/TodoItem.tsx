import { useTodoStore } from "@/store/todo-store";
import { Todo } from "@/types/todo-types";
import Link from "next/link";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, isDone, deadline } = todo;

  const { deleteTodo, toggleTodo } = useTodoStore();

  const handleDeleteTodo = () => {};

  return (
    <li>
      <Link href={`/details/${id}`}>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>{deadline}</p>

        <button onClick={() => toggleTodo(id)}>
          {isDone ? "취소" : "완료"}
        </button>
        <button onClick={handleDeleteTodo}>삭제</button>
      </Link>
    </li>
  );
};

export default TodoItem;

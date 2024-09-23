import { Todo } from "@/types/todo-types";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, isDone, deadline } = todo;
  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>{deadline}</p>
      </div>
      <div>
        <button>{isDone ? "취소" : "완료"}</button>
        <button>삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;

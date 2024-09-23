import { Todo } from "@/app/types/todo.type";

interface TodoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoProps) => {
  const { id, title, content, deadline, isDone } = todo;
  return (
    <div>
      <li key={id}>
        <p>제목: {title}</p>
        <p>제목: {content}</p>
        <p>마감일: {deadline}</p>
        <p>제목: {content}</p>
      </li>
    </div>
  );
};

export default TodoItem;

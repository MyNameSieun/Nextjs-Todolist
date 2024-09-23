import { useTodoStore } from "@/store/todo-store";
import { Todo } from "@/types/todo-types";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, isDone, deadline } = todo;

  const { deleteTodo, toggleTodo } = useTodoStore();

  const handleDeleteTodo = () => {};

  return (
    <li>
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>{deadline}</p>
      </div>
      <div>
        <button onClick={() => toggleTodo(id)}>
          {isDone ? "취소" : "완료"}
        </button>
        <button onClick={handleDeleteTodo}>삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;

import { deleteTodo } from "@/app/api/todos";
import { Todo } from "@/app/types/todo.type";

interface TodoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoProps) => {
  const { id, title, content, deadline, isDone } = todo;

  const handleDeleteButton = async () => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");

    try {
      if (deleteConfirm) {
        await deleteTodo(id);
        alert("삭제가 완료되었습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <li>
        <p>제목: {title}</p>
        <p>제목: {content}</p>
        <p>마감일: {deadline}</p>
        <p>제목: {content}</p>
        <button onClick={handleDeleteButton}>삭제</button>
      </li>
    </div>
  );
};

export default TodoItem;

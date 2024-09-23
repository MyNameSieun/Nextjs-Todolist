import { deleteTodo, patchTodo } from "@/app/api/todos";
import { EditTodo, Todo } from "@/app/types/todo.type";
import { useState } from "react";

interface TodoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoProps) => {
  const { id, title, content, deadline, isDone } = todo;
  const [editTodo, setEditTodo] = useState<EditTodo | null>(null);

  // 삭제
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

  // 수정
  const handleEditButton = async () => {
    try {
      if (editTodo) {
        await patchTodo(id, {
          title: editTodo.title,
          content: editTodo.content,
        });
        alert("수정이 완료되었습니다.");
        setEditTodo(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <li>
        {editTodo ? (
          <>
            <input
              value={editTodo.title}
              onChange={(e) =>
                setEditTodo({ ...editTodo, title: e.target.value })
              }
            />
            <input
              value={editTodo.content}
              onChange={(e) =>
                setEditTodo({ ...editTodo, content: e.target.value })
              }
            />
            <button onClick={handleEditButton}>수정 완료</button>
            <button onClick={() => setEditTodo(null)}>수정 취소</button>
          </>
        ) : (
          <>
            <p>제목: {title}</p>
            <p>내용: {content}</p>
            <p>마감일: {deadline}</p>
            <p>제목: {content}</p>
            <button onClick={handleDeleteButton}>삭제</button>
            <button onClick={() => setEditTodo({ title, content })}>
              수정
            </button>
          </>
        )}
      </li>
    </div>
  );
};

export default TodoItem;

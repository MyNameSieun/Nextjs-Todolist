import { useTodoStore } from "@/store/todo-store";
import { EditTodo, Todo } from "@/types/todo-types";
import Link from "next/link";
import { useState } from "react";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title, content, isDone, deadline } = todo;
  const [editMode, setEditMode] = useState<EditTodo | null>(null);

  const { deleteTodo, editTodo, toggleTodo } = useTodoStore();

  // 삭제
  const handleDeleteTodo = () => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");

    if (deleteConfirm) {
      deleteTodo(id);
      alert("삭제 완료!");
    }
  };

  // 수정
  const handleEditButton = () => {
    if (editMode) {
      editTodo(id, { title: editMode.title, content: editMode.content });
      setEditMode(null);
      alert("수정 완료!");
    }
  };

  return (
    <li>
      {editMode ? (
        <>
          <input
            value={editMode.title}
            onChange={(e) =>
              setEditMode({ ...editMode, title: e.target.value })
            }
          />
          <input
            value={editMode.content}
            onChange={(e) =>
              setEditMode({ ...editMode, content: e.target.value })
            }
          />
          <p>{deadline}</p>
          <button onClick={handleEditButton}>수정 완료</button>
          <button onClick={() => setEditMode(null)}>수정 취소</button>
        </>
      ) : (
        <>
          <Link href={`/details/${id}`}>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{deadline}</p>
          </Link>
          <button onClick={() => toggleTodo(id)}>
            {isDone ? "취소" : "완료"}
          </button>
          <button onClick={handleDeleteTodo}>삭제</button>
          <button onClick={() => setEditMode({ title, content })}>수정</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;

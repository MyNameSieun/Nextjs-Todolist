"use client";

import { addTodo } from "@/app/api/todos";
import { FormEvent } from "react";

const TodoForm = () => {
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: new Date().toLocaleDateString(),
    };

    try {
      await addTodo(nextTodo);
      alert("추가 완료!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="title">제목: </label>
          <input id="title" name="title" />
        </div>
        <div>
          <label htmlFor="content">내용: </label>
          <input id="content" name="content" />
        </div>
        <button type="submit">추가</button>
      </form>
    </>
  );
};

export default TodoForm;

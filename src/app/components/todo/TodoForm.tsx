import { FormEvent } from "react";

const TodoForm = () => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      </form>
    </>
  );
};

export default TodoForm;

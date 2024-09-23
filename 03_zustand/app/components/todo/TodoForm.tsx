import { useTodoStore } from "@/store/todo-store";
import { Todo } from "@/types/todo-types";
import { useId } from "react";

const TodoForm = () => {
  const { addTodo } = useTodoStore();

  const titleId = useId();
  const contentId = useId();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    const nextTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
      deadline: new Date().toLocaleDateString(),
    };

    addTodo(nextTodo);

    e.currentTarget.reset();
  };

  return (
    <section>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor={titleId}>Title</label>
        <input type="text" id={titleId} name="title" />

        <label htmlFor={contentId}>content</label>
        <input type="text" id={contentId} name="content" />
        <button>추가하기</button>
      </form>
    </section>
  );
};

export default TodoForm;

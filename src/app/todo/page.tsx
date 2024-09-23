import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";
import { Todo } from "@/app/types/todo.type";

const TodoPage = async () => {
  const response = await fetch("http://localhost:4000/todos", {
    next: {
      revalidate: 5, // 5초마다 새로운 데이터 가져옴
    },
  });
  const todos: Todo[] = await response.json();

  const inProgressTodo = todos.filter((todo) => !todo.isDone);
  const doneTodo = todos.filter((todo) => todo.isDone);

  return (
    <>
      <TodoForm />
      <TodoList todoTitle="In Progress" todos={inProgressTodo} />
      <TodoList todoTitle="Done" todos={doneTodo} />
    </>
  );
};

export default TodoPage;

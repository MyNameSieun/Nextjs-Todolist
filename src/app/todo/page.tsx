import TodoList from "../components/todo/TodoList";
import TodoForm from "../components/todo/TodoForm";
import { Todo } from "@/app/types/todo.type";
import axios from "axios";

const TodoPage = async () => {
  const response = await axios.get("http://localhost:4000/todos", {
    headers: {
      "Cache-Control": "no-cache", // 캐시를 사용하지 않도록 설정
    },
  });

  const todos: Todo[] = response.data;

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

// 페이지 컴포넌트에서 revalidate 설정
export const revalidate = 5; // 5초마다 새로운 데이터 가져옴

export default TodoPage;

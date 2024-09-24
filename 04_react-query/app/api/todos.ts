import axios from "axios";
import { EditTodo, Todo } from "../types/todo-types";

const todosAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

// todo 조회
// axios에서는 기본적으로 cache라는 옵션을 지원하지 않음 따라서 fetch 사용
export const fetchTodos = async () => {
  const response = await fetch(`http://localhost:4000/todos`, {
    method: "GET",
    cache: "no-cache", // 캐시 방지
  });

  const data: Todo[] = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  return data;
};

// todo 추가
export const addTodo = async (todo: Todo) => {
  return await todosAxios.post(`/todos`, todo);
};

// todo 삭제
export const deleteTodo = async (id: string) => {
  return await todosAxios.delete(`/todos/${id}`);
};

// todo 수정
export const patchTodo = async (id: string, todo: EditTodo) => {
  return await todosAxios.patch(`/todos/${id}`, todo);
};

// todo 토글
export const toggleDoneTodo = async (id: string, isDone: boolean) => {
  return await todosAxios.patch(`/todos/${id}`, { isDone: !isDone });
};

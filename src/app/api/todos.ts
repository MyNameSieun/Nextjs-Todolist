import axios from "axios";
import exp from "constants";
import { EditTodo, Todo } from "../types/todo.type";

const todosAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

// todo 조회
export const fetchTodos = async () => {
  return await todosAxios.get(`/todos`);
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

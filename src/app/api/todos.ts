import axios from "axios";
import exp from "constants";
import { Todo } from "../types/todo.type";

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

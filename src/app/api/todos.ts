import axios from "axios";

const todosAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

// todo 조회
export const fetchTodo = async () => {
  return await todosAxios.get(`/todos`);
};

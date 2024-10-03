import { getSingleTodo } from "@/app/services/todos";
import { useSuspenseQuery } from "@tanstack/react-query";
interface UseTodoQueryParams {
  id: string;
}

export const useSingleTodoQuery = ({ id }: UseTodoQueryParams) => {
  return useSuspenseQuery({
    queryKey: ["todo", id],
    queryFn: () => getSingleTodo(id),
  });
};

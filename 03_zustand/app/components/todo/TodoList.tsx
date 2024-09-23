import { Todo } from "@/types/todo-types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  title: string;
  todo: Todo[];
}

const TodoList = ({ title, todo }: TodoListProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {todo.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;

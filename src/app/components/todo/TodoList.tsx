import { Todo } from "@/app/types/todo.type";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todoTitle: string;
  todos: Todo[];
}

const TodoList = ({ todoTitle, todos }: TodoListProps) => {
  return (
    <>
      <h1>{todoTitle}</h1>

      <div>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </>
  );
};

export default TodoList;

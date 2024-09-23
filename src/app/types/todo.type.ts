export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  deadline: string;
}

export type EditTodo = Pick<Todo, "title" | "content">;

export interface DoneTodo extends Todo {
  isDone: true;
}

export interface InProgressTodo extends Todo {
  isDone: false;
}

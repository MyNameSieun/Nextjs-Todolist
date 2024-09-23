export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  deadline: string;
}

export type EditTodo = Pick<Todo, "title" | "content">;

export interface WorkingTodo extends Todo {
  isDone: false;
}

export interface DoneTodo extends Todo {
  isDone: true;
}

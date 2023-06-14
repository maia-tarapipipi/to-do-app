export interface UpdatedTodo {
  todo: string
  id: number
}

export interface NewTodo {
  todo : string
  priority: 1 | 2 | 3 | 4 | 5;
}

export interface UpdatedTodoPriority {
  id : number
  priority : 1 | 2 | 3 | 4 | 5;
}

export interface Todo {
  id : number,
  todo : string,
  priority: 1 | 2 | 3 | 4 | 5;
  isCompleted : boolean
}
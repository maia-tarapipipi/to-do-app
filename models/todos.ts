export interface NewTodo {
  name: string
  priority: string
  completed: string
}

export interface Todo extends NewTodo {
  id: number
}

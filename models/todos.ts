export interface NewTodo {
  name: string
  priority: string
  completed: boolean
}

export interface Todo extends NewTodo {
  id: number
}

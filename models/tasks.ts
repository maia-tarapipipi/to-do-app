export interface NewTask {
  name: string
  priority: string
  completed: string
}

export interface Task extends NewTask {
  id: number
}
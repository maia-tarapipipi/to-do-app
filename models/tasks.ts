export interface NewTask {
  name: string
  priority: string
  completed: boolean
}

export interface Task extends NewTask {
  id: number
}
export interface TaskDraft {
  task: string
  priority: number
}

export interface Task extends TaskDraft {
  id: number
  completed: boolean
}

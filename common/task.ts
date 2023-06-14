export interface TaskDraft {
  details: string
  priority: number
  completed: boolean
}

export interface Task extends TaskDraft {
  id: number
}

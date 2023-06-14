export interface TaskDraft {
  task: string
}

export interface Task extends TaskDraft {
  id: number
  completed: boolean
}

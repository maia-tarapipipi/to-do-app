export interface TaskDraft {
  task_name: string
}

export interface Task extends TaskDraft {
  id: number
  priority: string
  completed: boolean
}

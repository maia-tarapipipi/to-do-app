export interface TaskDraft {
  TaskName: string
  Priority: string
  Completed: boolean
}

export interface Task extends TaskDraft {
  TaskID: number
}

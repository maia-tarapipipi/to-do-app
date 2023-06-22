export interface TodoDraft {
  task: string
  priority?: string
}

export interface Todo extends TodoDraft {
  id: number
  task: string
  priority: string
  completed: boolean
}

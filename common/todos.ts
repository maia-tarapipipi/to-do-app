export interface TodoDraft {
  todo: string
}

export interface Todo extends TodoDraft {
  id: number
  todo: string
  priority: string
  completed: boolean
}

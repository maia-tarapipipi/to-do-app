export interface TodoDraft {
task_details: string
priority: number
completed: boolean

}

export interface Todo extends TodoDraft {
  id: number
}
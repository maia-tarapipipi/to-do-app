export interface TodoDraft {
taskDetails: string
priority: number
completed: boolean

}

export interface Todo extends TodoDraft {
  id: number
  
}
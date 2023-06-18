/// todos

// for adding more data to DB - addTodo component
export interface TodoDraft {
  todoDetails: string
  completed: boolean
  priority: number
}

// to retirieve get data from DB
export interface TodosData extends TodoDraft {
  id: number
}

export interface TodoForm {
  todoDetails: string
  priority: number
}

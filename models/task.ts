
//frontend
export interface TaskDraft {
  task: string
}


//backend
export interface Task extends TaskDraft {
  id: number,
  task: string
  completed:boolean,
  priority: string
}
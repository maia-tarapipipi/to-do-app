import * as z from 'zod'
export interface TodoDraft {
  task: string,
  priority: string,
  completed: string,
}

export interface Todo extends TodoDraft {
  id: number,
}

export const todoDraftSchema = z.object({
  task: z.string(),
  priority: z.string(),
  completed: z.string(),
})
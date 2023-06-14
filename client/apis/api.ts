import request from 'superagent'

import { Todo, TodoDraft } from '../../models/todos'

const url = '/api/v1/todos/'

export async function getTodos() {
  const res = await request.get(url)
  return res.body as Todo[]
}

export function addTodos(task: TodoDraft) {
  return request.post(url).send(task)
}
// i change id to string because was complaining it may not work
export function deleteTodos(id: string) {
  return request.delete(url).send(id)
}

export function updateTodos(updateTaks: Todo) {
  return request.patch(url).send(updateTaks)
}

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

export function deleteTodos(id: number) {
  return request.delete(`${url}${id}`);
}

export function updateTodos(id: number, completed: boolean){
  console.log(id, completed, 'api.ts')
  return request.put(`${url}${id}`).send({completed})
}

// export function updateTodos(completed: boolean){
//   return request.
// }



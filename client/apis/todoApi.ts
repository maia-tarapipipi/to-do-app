import request from 'superagent'

import { TodoDraft, Todo } from '../../common/todos'

const url = '/api/v1/todos/'

export async function getTodos() {
  const res = await request.get(url)
  return res.body as Todo[]
}

export function addTodos(task: TodoDraft) {
  return request.post(url).send(task)
}

export function deleteTodos(id: number) {
  return request.delete(`${url}${id}`)
}

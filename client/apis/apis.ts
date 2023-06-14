import request from 'superagent'
import { ToDo, ToDoDraft } from '../../modules/todo'

const url = '/api/v1/todos/'

export async function getTodos() {
  const res = await request.get(url)
  return res.body as ToDo[]
}

export function addNewTodo(todo: ToDoDraft) {
  return request.post(url).send(todo)
}

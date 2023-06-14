import request from 'superagent'
import { NewTodo, Todo } from '../../models/todos'

const Url = '/api/v1/todos/'

export async function getTodos() {
  const res = await request.get(Url)
  return res.body as Todo[]
}

export async function addTodo(todo: NewTodo) {
  return request.post(Url).send(todo)
}

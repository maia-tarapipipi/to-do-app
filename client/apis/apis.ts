import request from 'superagent'
import { NewTask, Task } from '../../models/tasks'

const Url = '/api/v1/todos/'

export async function getTodos() {
  const res = await request.get(Url)
  return res.body as Task[]
}

export function addTodo(todo: NewTask) {
  return request.post(Url).send(todo)
}
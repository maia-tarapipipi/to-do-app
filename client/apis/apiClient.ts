import request from 'superagent'
import * as Models from '../../models/models'
const todosUrl = '/api/v1/todos'

export async function getTodos() {
  const res = await request.get(todosUrl)
  return res.body as Models.TodosData[]
}

export async function addTodo(todo: Models.TodoForm) {
  return request.post(todosUrl).send(todo)
}
import request from "superagent"
import { Todo, TodoDraft } from "../../models/todos"

const url = '/api/v1/todos'

export async function getTodos() {
  const res = await request.get(url)
  return res.body as Todo[]
}

export function addTodo(todo: TodoDraft) {
  console.log(todo, 'api')
  return request.post(url).send(todo)
}
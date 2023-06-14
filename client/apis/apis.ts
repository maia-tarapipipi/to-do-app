import request from "superagent"
import { Todo, TodoDraft } from "../../models/todos"

const url = '/api/v1/todos'

export async function getTodos() {
  const res = await request.get(url)
  return res.body as Todo[]
}

export async function addTodo(todo: TodoDraft) {
  return await request.post(url).send(todo)
}

export async function deleteTodo(id: number) {
  return await request.delete(`${url}/${id}`)
}
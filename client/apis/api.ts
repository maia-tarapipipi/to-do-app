import request from 'superagent'
import { Todo, TodoDraft } from '../../common/todo'

const url = '/api/v1/todos'

export async function getTodos() {
  const res = await request.get(url)
  return res.body as Todo[]
}
//Add new todos
export function addTodo(todo: TodoDraft) {
  return request.post(url).send(todo)
}

//DELETE TODO BY ID
export function deleteTodo (id: number) {
  return request.delete(id)
}
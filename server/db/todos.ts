import connection from "./connection";
import { Todo, TodoDraft } from '../../models/todos'

export async function getTodos(db = connection) {
  return await db('todos').select() as Promise<Todo[]>
}

export async function addTodo(newTodo: TodoDraft, db = connection) {

  await db('todos').insert(newTodo)
}

export async function deleteTodo(id: number, db = connection) {
  await db('todos').where('id', id).del()
}
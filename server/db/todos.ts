import connection from "./connection";
import { Todo, TodoDraft } from '../../models/todos'

export async function getTodos(db = connection) {
  return await db('todos').select() as Promise<Todo[]>
}

export async function addTodo(newTodo: TodoDraft, db = connection) {
  const { task, priority } = newTodo
  await db('todos').insert({ task, priority })
}
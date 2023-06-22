import connection from './connection'
import { Todo, TodoDraft } from '../../common/todos'

export async function getTodos(db = connection) {
  return (await db('Todos').select()) as Todo[]
}

export function addTodos(task: TodoDraft, db = connection) {
  return db('Todos').insert(task)
}

export function deleteTodos(id: number, db = connection) {
  return db('Todos').where({ id: id }).delete()
}

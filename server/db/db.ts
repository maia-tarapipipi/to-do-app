import connection from './connection'
import { Todo, TodoDraft } from '../../models/task'

export async function getTodos(db = connection) {
  return (await db('Todos').select()) as Todo[]
}

export function addTodos(task: TodoDraft, db = connection) {
  const { todo } = task
  return db('Todos').insert({ todo })
}

export function deleteTodos(id: number, db = connection) {
  return db('Todos').where({ id: id }).delete()
}

export function updateTask(id: number, updateTaks: Todo, db = connection) {
  return db('Todos').update(updateTaks).where({ id: id })
}

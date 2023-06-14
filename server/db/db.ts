import connection from './connection'
import { TodoDraft } from '../../common/todo'

export async function getTodos(db = connection) {
  return await db('films').select()
}

export function addTodos(todo: TodoDraft, db = connection) {
  const { task_details, priority, completed } = todo
  db('films').insert({ task_details, priority, completed })
}

export function updateTodos(id: number, db = connection) {
  db('todos').where('id', id).update()
}

export function deleteTodos(id: number, db = connection) {
  db('todos').where('id', id).delete()
}

//Q. do I need to return anything? need to check!

import connection from './connection'
import { ToDoDraft, ToDo } from '../../modules/todo'

export async function getTodos(db = connection) {
  return (await db('todos').select()) as ToDo[]
}

export async function addTodo(input: ToDoDraft, db = connection) {
  console.log('I am working')
  return await db('todos').insert(input)
}

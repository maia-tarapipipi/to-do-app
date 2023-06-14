import connection from './connection'
import { Todo, NewTodo } from '../../models/todos'

export async function getTodos(db = connection) {
  return (await db('todos').select()) as Todo []
}
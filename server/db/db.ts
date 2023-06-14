import connection from './connection'
import { ToDoDraft, ToDo } from '../../modules/todo'

export async function getTodos(db = connection): Promise<ToDo[]> {
  return await db('todos').select()
}

export async function addTodo(
  input: ToDoDraft,
  db = connection
): Promise<void> {
  await db('todos').insert(input)
}

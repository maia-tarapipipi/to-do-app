import connection from './connection'
import { ToDoDraft, ToDo } from '../../modules/todo'

export async function getTodos(db = connection) {
  return (await db('todos').select()) as Promise<ToDo[]>
}

export async function addTodo(
  input: ToDoDraft,
  db = connection
): Promise<void> {
  await db('todos').insert(input)
}

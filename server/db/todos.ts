import connection from "./connection";
import { Todo } from '../../models/todos'

export async function getTodos(db = connection) {
  return db('todos').select() as Promise<Todo[]>
}

export async function addTodo(newTodo: Partial<Todo>, db = connection) {
  const { task, priority } = newTodo
  return db('todos').insert({ task, priority })
}
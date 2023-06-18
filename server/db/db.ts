import connection from './connection'
import { TodoForm, TodosData } from '../../models/models'

export function getTodos(db = connection) {
  return db<TodosData>('todos').select(
    'id',
    'todo_details as todoDetails',
    'completed',
    'priority'
  )
}

export function addTodo(input: TodoForm, db = connection) {
  const { todoDetails, priority } = input
  return db('todos').insert({ todo_details: todoDetails, priority: priority })
}

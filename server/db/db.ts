import connection from './connection'
import { TodosData } from '../../models/models'

export function getTodos(db = connection) {
  return db<TodosData>('todos').select(
    'id',
    'todo_details as todoDetails',
    'completed',
    'priority'
  )
}

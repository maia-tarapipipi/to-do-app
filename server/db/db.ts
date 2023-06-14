import connection from './connection'
import { TodosData } from '../../models/models'

// enter in all DB queries

//Retrieves all DB data
export function getTodos(db = connection) {
  return db<TodosData>('todos').select()
}

import connection from './connection'
import { TodoDraft } from '../../common/todo'

export function getTodos(db = connection) {
  return db('todos').select(
    'id',
    'task_details as taskDetails',
    'priority',
    'completed'
  )
}

export function addTodos(todo: TodoDraft, db = connection) {
  const { taskDetails, priority, completed } = todo
  return db('todos').insert({ task_details: taskDetails, priority, completed })
}

export function updateTodos(id: number, db = connection) {
  return db('todos').where('id', id).update()
}

export function deleteTodos(id: number, db = connection) {
  return db('todos').where('id', id).delete()
}

//Q. do I need to return anything? need to check!
//The answer is yes, because if I don't return anything, it wouldn't know what we are returning and it will give you an error message saying the type is void when you connect this to the route

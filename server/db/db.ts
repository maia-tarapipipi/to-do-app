import connection from './connection'
import { Task, TaskDraft } from '../../common/task'

export async function getTasks(db = connection) {
  return (await db('tasks').select()) as Task
}

export function addTasks(taskData: TaskDraft, db = connection) {
  return db('tasks').insert(taskData)
}

export function updateTask(id: number, taskData: Task, db = connection) {
  return db('tasks').where('id', id).update(taskData)
}

export function deleteTask(id: number, db = connection) {
  return db('tasks').where('id', id).del()
}

import connection from './connection'
import { TaskDraft, Task } from '../../models/models'

export async function getTasks(db = connection) {
  return (await db('tasks').select()) as Task[]
}

export async function addTask(task: TaskDraft, db = connection) {
  return db('tasks').insert(task)
}

export async function updateTask(Complete: boolean, db = connection) {
  return await db('tasks')
}

export function deleteTask(id: number, db = connection) {
  return db('tasks').where('id', id).del()
}

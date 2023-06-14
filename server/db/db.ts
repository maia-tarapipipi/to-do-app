import connection from './connection'
import { TaskDraft, Task } from '../../common/task'

export async function getTasks(db = connection) {
  return (await db('tasks').select()) as Task[]
}

export function addTask(task: TaskDraft, db = connection) {
  const { TaskName, Priority, Completed } = task
  return db('tasks').insert({ TaskName, Priority, Completed })
}

export async function updateTask(Complete: boolean, db = connection) {
  return await db('tasks')
}

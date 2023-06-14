import request from 'superagent'
import { Task, TaskData } from '../../models/Todos'
const rootUrl = '/api/v1/todos'

export async function getTasks() {
  const res = await request.get(rootUrl)
  return res.body as Task[]
}

export async function addTask(taskData: TaskData) {
  return await request.post(rootUrl).send(taskData)
}

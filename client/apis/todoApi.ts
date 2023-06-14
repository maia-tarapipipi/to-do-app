import request from 'superagent'
import { Task, TaskData } from '../../models/Todos'
const rootUrl = '/api/v1/todos'

export async function fetchLangauges() {
  const res = await request.get(rootUrl)
  return res.body as Task[]
}

export async function addLanguage(taskData: TaskData) {
  return await request.post(rootUrl).send(taskData)
}

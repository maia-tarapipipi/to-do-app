import request from 'superagent'

import { TaskDraft, Task } from '../../models/models'

const url = '/api/v1/tasks'

export async function getTasks() {
  const res = await request.get(url)
  return res.body as Task[]
}

export async function addNewTask(task_name: TaskDraft) {
  return await request.post(url).send(task_name)
}

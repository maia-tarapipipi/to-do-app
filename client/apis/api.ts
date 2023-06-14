import request from 'superagent'

import { TaskDraft, Task } from '../../common/task'

const url = '/api/v1/tasks/'

export async function getTasks() {
  const res = await request.get(url)
  return res.body as Task[]
}

export function addNewTask(Task: TaskDraft) {
  return request.post(url).send(Task)
}

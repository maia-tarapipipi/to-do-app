import request from 'superagent'

import { TaskDraft, Task } from '../../common/task'

const url = '/api/v1/tasks'

export async function getTodos() {
  const res = await request.get(url)
  return res.body as Task[]
}

export function addTodo(task: TaskDraft) {
  return request.post(url).send(task)
}

export function deleteTodo(id: number) {
  return request.delete(`${url}/${id}`)
}

export async function updateTodo(id: number) {
  const res = await request.get(`${url}/${id}`)
  const task = res.body
  console.log('Update todo:', task)
  await request.patch(`${url}/${id}`).send(task)
}

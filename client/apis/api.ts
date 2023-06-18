import request from 'superagent'
import { Task, TaskDraft } from '../models/models';


const url = '/api/v1/todos'

export async function getTasks() {
  const res = await request.get(url)
  return res.body as Task[]
}

export async function addTask(task:TaskDraft) {
  await request.post(url).send(task)
}

export async function deleteTask(id:number) {
  console.log('API: delete');
  await request.delete(`${url}/${id}`)
}

export async function editTask(task:Task) {  
  await request.put(`${url}/${task.id}`).send(task)
}


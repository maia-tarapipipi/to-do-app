import request from 'superagent'
import { Task, TaskDraft } from '../models/models';


const url = '/api/v1/todos'

export async function getTasks() {
  const res = await request.get(url)
  return res.body as Task[]
}

export async function addTask(task:TaskDraft) {
  console.log(`API: `,task);  
  await request.post(url).send(task)
}

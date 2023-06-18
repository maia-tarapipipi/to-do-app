import { log } from 'console'
import connection from './connection'

interface TodoDraft {
  task: string
  completed: boolean
  priority: number
}

interface Todo extends TodoDraft {
  id: number
}

//GET todos
export function getTasks(db = connection) {
  return db('todos').select().orderBy('completed', 'desc') as Todo
}

//POST add todo
export async function addTodo(todo: TodoDraft, db = connection) {
  const [id] = await db('todos').insert(todo)
  return console.log(id)
}

//UPDATE todo
export async function editTodo({task, completed, priority, id}: Todo, db = connection) {
    const dbId = await db('todos').where('id', id).update({task, priority, completed})    
    return console.log(dbId);
    
}

//DELETE todo
export async function deleteTodo(id:number, db = connection) {
  console.log('DB: delete');
  return await db('todos').where('id', id).del()
}
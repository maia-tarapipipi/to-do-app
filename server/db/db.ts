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
  return db('todos').select().orderBy('completed', 'desc') as Todo[]
}

//GET todo by id
export function getTaskById(id:number, db = connection) {
  return db('todos').where('id', id).select().first() as Todo
}

//POST add todo
export async function addTodo(todo: TodoDraft, db = connection) {
  return await db('todos').insert(todo)
  
}

//UPDATE todo
export async function editTodo({task, completed, priority, id}: Todo, db = connection) {
    return await db('todos').where('id', id).update({id, task, priority, completed})    
   
    
}

//DELETE todo
export async function deleteTodo(id:number, db = connection) {

  return await db('todos').where('id', id).del()
}
import connection from './connection'

interface TodoDraft {
  task: string
  completed: boolean
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
  console.log(`DB: `,todo);
  
  const [id] = await db('todos').insert({ ...todo })
  return console.log(id)
}

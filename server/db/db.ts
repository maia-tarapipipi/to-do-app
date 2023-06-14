import connection from "./connection";

interface TodoDraft {
  task: string,
  completed: boolean
}

interface Todo extends TodoDraft {
  id: number
}


//GET todos
export function getTodos(db = connection) {
  return db('todos').select()
}

//POST add todo
export async function addTodo(todo: TodoDraft, db = connection) {
  const [id] = await db('todos').insert({...todo})
  return console.log(id);  
}
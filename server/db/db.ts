import connection from './connection'

export async function getList(db = connection) {
  return await db('todos').select()
}

export async function addTask(toDo: string, db = connection) {
  return await db('todos').insert({ task: toDo })
}

export async function deleteTask(id: number, db = connection) {
  await db('todos').where('id', id).del()
}

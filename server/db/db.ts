import connection from './connection';
import { Todo, NewTodo } from '../../models/todos';

export async function getTodos(db = connection): Promise<Todo[]> {
  return (await db('todos').select()) as Todo[];
}

export function addTodo(todo: NewTodo, db = connection) {
  const { name, priority, completed } = todo;
  return db('todos').insert({ name, priority, completed });
}

export function deleteTodo(id: number, db = connection) {
  return db('todos').where('id', id).delete();
}

export function updateTodo(id: number, updatedTodo: Partial<NewTodo>, db = connection) {
  return db('todos').where('id', id).update(updatedTodo);
}

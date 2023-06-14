import connection from './connection';
import { Task, NewTask } from '../../models/tasks';

export async function getTodos(db = connection) {
  return (await db('todos').select()) as Task[];
}

export function addTodo(todo: NewTask, db = connection) {
  const { name, priority, completed } = todo;
  return db('todos').insert({ name, priority, completed });
}

export function updateTodo(taskId: string, updatedTask: Partial<NewTask>, db = connection) {
  return db('todos').where({ id: taskId }).update(updatedTask);
}

export function deleteTodo(taskId: string, db = connection) {
  return db('todos').where({ id: taskId }).del();
}

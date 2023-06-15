import request from 'superagent';
import { NewTask, Task } from '../../models/tasks';
// import * as Models from '../../models/tasks'
const url = '/api/v1/todos/';

export async function getTodos() {
  const res = await request.get(url);
  console.log('Api Todos:', res); // Log the todos data
  return res.body as Task[];
}

export function addTodo(todo: NewTask) {
  console.log('Adding todo:', todo); // Log the todo being added
  return request.post(url).send(todo);
}

export function updateTodo(todo: Task) {
  const { id } = todo;
  console.log('Updating todo:', todo); // Log the todo being updated
  return request.put(`${url}${id}`).send(todo);
}

export function deleteTodo(todoId: number) {
  console.log('Deleting todo with ID:', todoId); // Log the todoId being deleted
  return request.delete(`${url}${todoId}`);
}

import request from 'superagent';
import { NewTask, Task } from '../../models/tasks';

const Url = '/api/v1/todos/';

export async function getTodos() {
  const res = await request.get(Url);
  const todos = res.body as Task[];
  console.log('Todos:', todos); // Log the todos data
  return todos;
}

export function addTodo(todo: NewTask) {
  console.log('Adding todo:', todo); // Log the todo being added
  return request.post(Url).send(todo);
}

export function updateTodo(todo: Task) {
  const { id } = todo;
  console.log('Updating todo:', todo); // Log the todo being updated
  return request.put(`${Url}${id}`).send(todo);
}

export function deleteTodo(todoId: number) {
  console.log('Deleting todo with ID:', todoId); // Log the todoId being deleted
  return request.delete(`${Url}${todoId}`);
}

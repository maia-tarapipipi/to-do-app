import request from 'superagent';
import { UpdatedTodo, NewTodo, UpdatedTodoPriority } from '../../models/Todo';

const baseUrl = '/'; // Replace with your base URL

//--- GET REQUESTS ---//

export function getAllTodos(): Promise<any> {
  return request.get(`${baseUrl}/todos`);
}

export function getTodoById(todoId: number): Promise<any> {
  return request.get(`${baseUrl}/todos/${todoId}`);
}

export function getTodosByCompletion(isCompleted: boolean): Promise<any> {
  return request.get(`${baseUrl}/todos?isCompleted=${isCompleted}`);
}


//--- POST REQUESTS ---//

export function addTodo(newTodo: NewTodo): Promise<any> {
  return request.post(`${baseUrl}/todos`).send(newTodo);
}


//--- PATCH REQUESTS ---//

export function completeTodo(todoId: number): Promise<any> {
  return request.patch(`${baseUrl}/todos/${todoId}/complete`);
}

export function updateTodo(updatedTodo: UpdatedTodo): Promise<any> {
  return request.patch(`${baseUrl}/todos/${updatedTodo.id}`).send(updatedTodo);
}

export function updateTodoPriority(updatedTodoPriority: UpdatedTodoPriority): Promise<any> {
  return request.patch(`${baseUrl}/todos/${updatedTodoPriority.id}/priority`).send(updatedTodoPriority);
}


//--- DELETE REQUESTS ---//

export function clearCompletedTodos(): Promise<any> {
  return request.delete(`${baseUrl}/todos/completed`);
}

export function removeTodo(todoId: number): Promise<any> {
  return request.delete(`${baseUrl}/todos/${todoId}`);
}

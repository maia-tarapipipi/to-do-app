import { useQuery, useMutation } from 'react-query';
import request from 'superagent';
import { NewTodo, Todo } from '../../models/todos';

const Url = '/api/v1/todos/';

export function useTodos() {
  return useQuery<Todo[]>('todos', getTodos);
}

export function useAddTodo() {
  return useMutation((todo: NewTodo) => addTodo(todo));
}

export function useDeleteTodo() {
  return useMutation((id: number) => deleteTodo(id));
}

export function useUpdateTodo() {
  return useMutation((updatedTodo: Todo) => updateTodo(updatedTodo));
}


async function getTodos() {
  const res = await request.get(Url);
  return res.body as Todo[];
}

async function addTodo(todo: NewTodo) {
  const res = await request.post(Url).send(todo);
  return res.body as Todo;
}

async function deleteTodo(id: number) {
  const res = await request.delete(`${Url}${id}`);
  return res.body as Todo;
}

async function updateTodo(updatedTodo: Todo) {
  const res = await request.put(`${Url}${updatedTodo.id}`).send(updatedTodo);
  return res.body as Todo;
}


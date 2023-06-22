import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Task, TaskDraft } from '../../common/task'
import { addTodo, getTodos, deleteTodo, updateTodo } from '../apis/api'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return await getTodos()
})

export const postTodoThenFetch = createAsyncThunk(
  'todos/postTodo',
  async (todo: TaskDraft) => {
    await addTodo(todo)
    return await getTodos()
  }
)

export const deleteTodoThenFetch = createAsyncThunk(
  'todos/deleteTodo',
  async (id: number) => {
    await deleteTodo(id)
    return await getTodos()
  }
)

export const updateTodoThenFetch = createAsyncThunk(
  'todos/updateTodo',
  async (todo: Task) => {
    console.log('updateTodoThenFetch')
    const id = todo.id
    await updateTodo(id, todo)
    return await getTodos()
  }
)

const slice = createSlice({
  name: 'todos',
  initialState: [] as Task[],
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => payload)
      .addCase(postTodoThenFetch.fulfilled, (state, { payload }) => payload)
      .addCase(deleteTodoThenFetch.fulfilled, (state, { payload }) => payload)
      .addCase(updateTodoThenFetch.fulfilled, (state, { payload }) => payload),
})

export default slice.reducer

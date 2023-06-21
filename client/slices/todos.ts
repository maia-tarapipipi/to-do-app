import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Task, TaskDraft } from '../../common/task'
import { addTodo, getTodos, deleteTodo } from '../apis/api'

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
    console.log('deleteTodoThenFetch')
    await deleteTodo(id)
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
      .addCase(deleteTodoThenFetch.fulfilled, (state, { payload }) => payload),
})

export default slice.reducer

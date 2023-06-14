import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  addTodos,
  getTodos,
  // deleteTodos,
  // updateTodos,
} from '../apis/api'
import { Todo, TodoDraft } from '../../models/todos'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return await getTodos()
})

export const postTodosThenFetch = createAsyncThunk(
  'todospostTodosThenFetch',
  async (task: TodoDraft) => {
    await addTodos(task)
    return await getTodos()
  }
)

const todosSlice = createSlice({
  name: 'todo',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) =>
    builder
    .addCase(fetchTodos.fulfilled, (state, { payload }) => payload)
    .addCase(postTodosThenFetch.fulfilled, (state, { payload }) => payload)
})

export default todosSlice.reducer

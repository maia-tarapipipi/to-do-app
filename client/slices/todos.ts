import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { NewTodo, Todo } from '../../models/todos'
import { addTodo, getTodos } from '../apis/api'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return await getTodos()
})

export const postTodoThenFetch = createAsyncThunk(
  'todo/postTodo',
  async (todo: NewTodo) => {
    await addTodo(todo)
    return await getTodos()
  }
)

const slice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) => 
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => payload)
      .addCase(postTodoThenFetch.fulfilled, (state, { payload }) => payload),
  },

    )

export default slice.reducer

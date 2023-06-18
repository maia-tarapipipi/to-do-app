import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TodoForm, TodosData } from '../../models/models'
import { getTodos, addTodo } from '../apis/apiClient'

// create the async action

export const fetchTodos = createAsyncThunk('todosList/fetchTodos', async () => {
  return await getTodos()
})

export const postTodothenReload = createAsyncThunk(
  'todosList/postTodothenReload',
  async (todo: TodoForm) => {
    await addTodo(todo)
    return await getTodos()
  }
)

const slice = createSlice({
  name: 'todosList',
  initialState: [] as TodosData[],
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => payload)
      .addCase(postTodothenReload.fulfilled, (state, { payload }) => payload),
})

export default slice.reducer

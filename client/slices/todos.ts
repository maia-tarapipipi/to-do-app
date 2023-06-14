import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Todo } from '../../common/todo'
import { getTodos } from '../apis/api'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  //not from db. Because the slice needs to get the data from the API (client side)
  return await getTodos()
})

const slice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => payload),
})

export default slice.reducer

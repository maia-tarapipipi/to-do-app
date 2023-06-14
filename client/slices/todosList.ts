import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { TodosData } from '../../models/models'
import { getTodos } from '../apis/apiClient'

// create the async action

export const fetchTodos = createAsyncThunk('todosList/fetchTodos', async () => {
  return await getTodos()
})

const slice = createSlice({
  name: 'todosList',
  initialState: [] as TodosData[],
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => payload),
})

export default slice.reducer

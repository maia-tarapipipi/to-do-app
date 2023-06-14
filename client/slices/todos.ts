import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ToDo, ToDoDraft } from '../../modules/todo'
import { addNewTodo, getTodos } from '../apis/apis'

export const fetchTodos = createAsyncThunk('films/fetchFilms', async () => {
  return await getTodos()
})

export const postTodoThenFetch = createAsyncThunk(
  'films/postFilm',
  async (todo: ToDoDraft) => {
    await addNewTodo(todo)
    return await getTodos()
  }
)

const slice = createSlice({
  name: 'todos',
  initialState: [] as ToDo[],
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => payload)
      .addCase(postTodoThenFetch.fulfilled, (state, action) => action.payload),
})
export default slice.reducer

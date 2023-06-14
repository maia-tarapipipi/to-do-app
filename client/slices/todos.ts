import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ToDo } from '../../modules/todo'
import { getTodos } from '../apis/apis'

export const fetchTodos = createAsyncThunk('films/fetchFilms', async () => {
  return await getTodos()
})

// export const postFilmThenFetch = createAsyncThunk(
//   'films/postFilm',
//   async (film: FilmDraft) => {
//     await addNewFilm(film)
//     return await getFilms()
//   }
// )

const slice = createSlice({
  name: 'todos',
  initialState: [] as ToDo[],
  reducers: {},
  extraReducers: (builder) =>
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => payload),
})

export default slice.reducer

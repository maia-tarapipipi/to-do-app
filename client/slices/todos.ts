import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Todo, TodoDraft } from '../../common/todo'
import { addTodo, deleteTodo, getTodos } from '../apis/api'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  //not from db. Because the slice needs to get the data from the API (client side)
  return await getTodos()
})

//Add todos
export const postTodoThenFetch = createAsyncThunk(
  'todo/postTodoThenFetch',
  async (todo: TodoDraft) => {
    await addTodo(todo)
    return await getTodos()
  }
)

//DELETE TODOS
export const removeTodo = createAsyncThunk(
  'todo/removeTodo',
  async (id: number) => {
    await deleteTodo(id)
  }
)

const slice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => payload)
      .addCase(postTodoThenFetch.fulfilled, (state, { payload }) => payload)
      .addCase(removeTodo.fulfilled, (state, { payload }) => payload),
})

export default slice.reducer

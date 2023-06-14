import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, getTodos } from "../apis/apis";
import { Todo, TodoDraft } from "../../models/todos";



export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return await getTodos()
})

export const postNewTodoThenFetch = createAsyncThunk('todos/postNewTodoThenFetch',
  async (todo: TodoDraft) => {
    await addTodo(todo)
    return await getTodos()
  })

const slice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => payload)
      .addCase(postNewTodoThenFetch.fulfilled, (state, { payload }) => payload)
})

export default slice.reducer
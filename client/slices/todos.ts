import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  addTodos,
  deleteTodos,
  getTodos,
  // updateTodos,
} from '../apis/api'
import { Todo, TodoDraft } from '../../models/todos'


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  return await getTodos()
})

export const postTodosThenFetch = createAsyncThunk(
  'todos/postTodosThenFetch',
  async (task: TodoDraft) => {
    await addTodos(task)
    return await getTodos()
  }
)
export const deleteTodoThenFetch = createAsyncThunk(
  'todos/deleteTodosThenFetch',
  async (id: number) => {
    await deleteTodos(id)
    return await getTodos()
  }
)
const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Todo[],
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) => payload)
      .addCase(postTodosThenFetch.fulfilled, (state, { payload }) => payload)
      .addCase(deleteTodoThenFetch.fulfilled, (state, action) => {
        const deletedTodoId = action.meta.arg;
        const updatedState = state.filter((todo) => todo.id !== deletedTodoId);
        return updatedState;
      }),
});

export default todosSlice.reducer

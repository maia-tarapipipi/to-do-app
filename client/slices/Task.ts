import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Task, TaskDraft } from '../../models/models'
import { addNewTask, getTasks } from '../apis/api'

export const fetchTask = createAsyncThunk('tasks/fetchTask', async () => {
  return await getTasks()
})

export const postTaskThenFetch = createAsyncThunk(
  'tasks/postTaskThenFetch',
  async (task: TaskDraft) => {
    await addNewTask(task)
    return await getTasks()
  }
)

export const slice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTask.fulfilled, (state, { payload }) => payload)
      .addCase(postTaskThenFetch.fulfilled, (state, { payload }) => payload),
})

export default slice.reducer

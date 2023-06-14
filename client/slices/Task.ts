import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Task, TaskDraft } from '../../common/task'
import { addNewTask, getTasks } from '../apis/api'

export const fetchTask = createAsyncThunk('films/fetchFilms', async () => {
  return await getTasks()
})

export const postTaskThenFetch = createAsyncThunk(
  'Tasks/postTasks',
  async (Task: TaskDraft) => {
    await addNewTask(Task)
    return await getTasks()
  }
)

const slice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchTask.fulfilled, (state, { payload }) => payload)
      .addCase(postTaskThenFetch.fulfilled, (state, { payload }) => payload),
})

export default slice.reducer

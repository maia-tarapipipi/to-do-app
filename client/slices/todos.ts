import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { addTask, getTasks } from '../apis/api'
import { TaskDraft, Task } from '../models/models'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  console.log('fetchTasks log');
  
  return await getTasks()
})

export const postTaskThenFetch = createAsyncThunk(
  'tasks/postTaskThenFetch',
  async (task: TaskDraft) => {
    console.log(`Testing slice thunk`, task);
    
    await addTask(task)
    return await getTasks()
  }
)

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (_, { payload }) => payload)
      .addCase(postTaskThenFetch.fulfilled, (_, { payload }) => payload)
  },
})

export default taskSlice.reducer

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getTasks, addTask } from '../apis/todoApi'
import { Task, TaskData } from '../../models/Todos'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return await getTasks()
})

export const postTaskThenFetch = createAsyncThunk(
  'tasks/postTask',
  async (task: TaskData) => {
    await addTask(task)
    return await getTasks()
  }
)

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload)
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTasks.fulfilled, (state, { payload }) => payload)
      .addCase(postTaskThenFetch.fulfilled, (state, { payload }) => payload),
})

export default tasksSlice.reducer

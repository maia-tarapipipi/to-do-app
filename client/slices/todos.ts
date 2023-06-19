import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { deleteTask, addTask, getTasks, editTask, taskDone } from '../apis/api'
import { TaskDraft, Task } from '../models/models'

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
 
  return await getTasks()
})

export const postTaskThenFetch = createAsyncThunk(
  'tasks/postTaskThenFetch',
  async (task: TaskDraft) => {
    await addTask(task)
    return await getTasks()
  }
)

export const setCompleted = createAsyncThunk(
  'tasks/setCompleted',
  async (id: number) => {
    await taskDone(id)
    return await getTasks()
  }
)

export const removeTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id: number) => {
    await deleteTask(id)
    return await getTasks()
  }
)

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task: Task) => {
    await editTask(task)
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
      .addCase(removeTask.fulfilled, (_, {payload}) => payload)
      .addCase(updateTask.fulfilled, (_, {payload}) => payload)
      .addCase(setCompleted.fulfilled, (_, {payload}) => payload)
  },
})

export default taskSlice.reducer

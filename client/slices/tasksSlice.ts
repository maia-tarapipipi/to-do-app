import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NewTask, Task } from '../../models/tasks';
import { getTodos, addTodo, updateTodo, deleteTodo } from '../apis/apis';

export const fetchTodos = createAsyncThunk('tasks/fetchTodos', async () => {
  return await getTodos();
});

export const addTaskAndFetch = createAsyncThunk(
  'tasks/addTask',
  async (task: NewTask) => {
    await addTodo(task);
    const todos = await getTodos();
    return todos;
  }
);

export const updateTaskAndFetch = createAsyncThunk(
  'tasks/updateTask',
  async (task: Task) => {
    await updateTodo(task);
    const todos = await getTodos();
    return todos;
  }
);

export const deleteTaskAndFetch = createAsyncThunk(
  'tasks/deleteTask',
  async (taskId: number) => {
    await deleteTodo(taskId);
    const todos = await getTodos();
    return todos;
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, { payload }) =>
        payload
      )
      .addCase(addTaskAndFetch.fulfilled, (state, { payload }) => {
        return {...state, payload};
      })
      .addCase(updateTaskAndFetch.fulfilled, (state, { payload }) => {
        return {...state, payload};
      })
      .addCase(deleteTaskAndFetch.fulfilled, (state, { payload }) => {
        return {...state, payload};
      });
  },
});

export default tasksSlice.reducer;
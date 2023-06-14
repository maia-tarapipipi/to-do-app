import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Payload {
  task: string
}

interface Task extends Payload {
  id: number
  completed: boolean
}

const initialState = [] as Task[]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, {payload}: PayloadAction<string>) => {
      return {...state}
    }
  }
})
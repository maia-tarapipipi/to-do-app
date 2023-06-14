import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
  // Add other slice reducers here if you have any
});

export default rootReducer;

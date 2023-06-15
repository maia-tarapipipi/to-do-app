import { combineReducers } from '@reduxjs/toolkit';
import tasks from './tasksSlice';

export default combineReducers({
  tasks: tasks,
  // Add other slice reducers here if you have any
});

// export default rootReducer;

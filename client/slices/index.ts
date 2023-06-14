import { combineReducers } from '@reduxjs/toolkit'
import todoSlice from './todos'

// import stuff from './stuff'

export default combineReducers({
  tasks: todoSlice,
})

import { combineReducers } from '@reduxjs/toolkit'
import todos from './todos'
// import stuff from './stuff'

export const rootReducer = combineReducers({
  todos: todos
})

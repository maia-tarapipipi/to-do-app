import { combineReducers } from '@reduxjs/toolkit'
import todosList from './todosList'

export default combineReducers({
  todosList: todosList,
})

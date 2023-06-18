import { combineReducers } from '@reduxjs/toolkit'

import slice from './Task'
// import stuff from './stuff'

export default combineReducers({
  tasks: slice,
})

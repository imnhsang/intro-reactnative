import {Tasks} from '../actionTypes'

const initialState = {
  isInitialized: false,
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case Tasks.FAIL_REQUEST_TASKS:
      return {...state}
    default:
      return state
  }
}

export default tasks

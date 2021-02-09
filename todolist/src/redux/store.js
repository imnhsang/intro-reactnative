import {combineReducers} from 'redux'

import {tasks} from './reducers'

const appReducer = combineReducers({tasks})

const rootReducer = (state, action) => {
  if (action.type === 'AUTH_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer

import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from '../redux/store'

export default () => {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

  return {store}
}

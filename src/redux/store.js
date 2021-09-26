import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import dataReducer from './reducer/dataReducer'
// import UiReducer from './reducer/UiReducer'
// import dataReducer from './reducer/dataReducer'

const middleware = [thunk]

const initialState = {}
const reducer = combineReducers({
  data: dataReducer,
})

const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f,
  ),
)

export default store

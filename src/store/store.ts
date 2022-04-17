import { createStore, applyMiddleware, Action } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import thunk, { ThunkMiddleware } from 'redux-thunk'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<any, Action<any>>)
  )
)

export default store

export type AppDispatch = typeof store.dispatch

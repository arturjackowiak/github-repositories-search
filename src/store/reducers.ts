import { combineReducers } from 'redux'
import repositoriesReducer from './repositories'

const rootReducer = combineReducers({
  repositories: repositoriesReducer,
})

export default rootReducer

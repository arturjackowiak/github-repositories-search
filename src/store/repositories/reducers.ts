import { AnyAction } from 'redux'
import ActionTypes from './types'

export const INITIAL_STATE = {
  data: [],
  cache: {},
  loading: false,
}

const repositoriesReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_REPOS:
      return {
        ...state,
        data: [...action.payload],
        loading: false,
      }
    case ActionTypes.ADD_TO_CACHE:
      return {
        ...state,
        cache: { ...state.cache, ...action.payload },
      }
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default repositoriesReducer

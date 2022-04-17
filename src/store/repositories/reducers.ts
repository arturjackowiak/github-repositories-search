import { AnyAction } from 'redux'
import ActionTypes from './types'

export const INITIAL_STATE = {
  data: [],
  cache: {},
  loading: false,
  error: {},
}

const repositoriesReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return {
        ...state,
        data: [...action.payload.data],
        cache: {
          ...state.cache,
          [action.payload.key]: [...action.payload.data],
        },
        loading: false,
      }
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}

export default repositoriesReducer

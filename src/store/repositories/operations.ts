import { Action, Dispatch } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import Actions from './actions'
import ActionTypes from './types'

const apiUrl = 'https://api.github.com/search/repositories'

export const getRepositories =
  (query: string) => async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      dispatch({
        type: ActionTypes.SET_LOADING,
        payload: true,
      })
      const response = await fetch(`${apiUrl}?q=${query}`, {
        method: 'GET',
      })
      const json = await response.json()

      dispatch({
        type: ActionTypes.SET_DATA,
        payload: { key: query, data: json.items },
      })
    } catch (error: any) {
      dispatch({
        type: ActionTypes.SET_LOADING,
        payload: false,
      })
      switch (error.message) {
        default:
          console.error(error)
          throw new Error('Unknown error!')
      }
    }
  }

export const setDataFromCache =
  (key: string, data: []) => (dispatch: Dispatch) => {
    dispatch(Actions.setRepositories(key, data))
  }

export const setRowSize = (size: number) => (dispatch: Dispatch) => {
  dispatch(Actions.setRowSize(size))
}

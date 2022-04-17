import ActionTypes from './types'

const setRepositories = (key: string, data: []) => ({
  type: ActionTypes.SET_DATA,
  payload: { key, data },
})

const setLoading = (payload: boolean) => ({
  type: ActionTypes.SET_LOADING,
  payload,
})

const setRowSize = (payload: number) => ({
  type: ActionTypes.SET_ROW_SIZE,
  payload,
})

const Actions = {
  setRepositories,
  setLoading,
  setRowSize,
}

export default Actions

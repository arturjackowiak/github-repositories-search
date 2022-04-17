import ActionTypes from './types'

const setRepositories = (repositories: []) => ({
  type: ActionTypes.SET_REPOS,
  payload: repositories,
})

const setLoading = (loading: boolean) => ({
  type: ActionTypes.SET_LOADING,
  payload: loading,
})

const addToCache = (query: string, repositories: []) => ({
  type: ActionTypes.ADD_TO_CACHE,
  payload: { [query]: { ...repositories } },
})

const Actions = {
  setRepositories,
  addToCache,
  setLoading,
}

export default Actions

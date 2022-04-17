import { Dispatch } from 'redux'
import actions from './actions'

const apiUrl = 'https://api.github.com/search/repositories'

const fetchRepositories = async (query: string) => {
  const response = await fetch(`${apiUrl}?q=${query}`, {
    method: 'GET',
  })
  const json = await response.json()

  return json.items
}

export const getSpecificRepositories =
  (query: string) => async (dispatch: Dispatch) => {
    dispatch(actions.setLoading(true))
    const repositories = await fetchRepositories(query)
    dispatch(actions.setRepositories(repositories))
    dispatch(actions.addToCache(query, repositories))
  }

export const setDataFromCache = (data: []) => (dispatch: Dispatch) => {
  dispatch(actions.setRepositories(data))
}

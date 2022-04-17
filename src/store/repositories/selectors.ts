import { createSelector } from 'reselect'

export const StoreSelector = (state: any) => state.repositories

export const RepositoriesDataSelector = createSelector(
  StoreSelector,
  (repositories) => repositories.data
)

export const CacheSelector = createSelector(
  StoreSelector,
  (repositories) => repositories.cache
)

export const CacheByKeySelector = (key: string) => createSelector(
  CacheSelector,
  (cache) => cache[key]
  )

export const LoadingSelector = createSelector(
  StoreSelector,
  (repositories) => repositories.loading
)

export const RowSelector = createSelector(
  StoreSelector,
  (repositories) => repositories.rowSize
)

import { Wrapper } from './home.styles'
import { SearchForm } from './components/searchForm'
import { RepositoriesList } from './components/repositoriesList'

export const Home = () => {
  return (
    <Wrapper>
      <SearchForm />
      <RepositoriesList />
    </Wrapper>
  )
}

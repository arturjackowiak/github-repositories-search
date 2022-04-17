import { Wrapper } from './home.styles'
import { SearchForm } from './components/searchForm'
import { RepositoriesList } from './components/repositoriesList'
import { Helmet } from 'react-helmet'

export const Home = () => {
  return (
    <Wrapper>
      <Helmet title={'GitHub repository search 🔍'} />

      <SearchForm />
      <RepositoriesList />
    </Wrapper>
  )
}

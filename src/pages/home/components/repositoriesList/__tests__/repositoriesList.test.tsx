import renderer from 'react-test-renderer'
import { RepositoriesList } from '../repositoriesList'

it('renders correctly', () => {
  const tree = renderer.create(<RepositoriesList />).toJSON()
  expect(tree).toMatchSnapshot()
})

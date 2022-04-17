import renderer from 'react-test-renderer'
import { SearchForm } from '../searchForm'

it('renders correctly', () => {
  const tree = renderer.create(<SearchForm />).toJSON()
  expect(tree).toMatchSnapshot()
})
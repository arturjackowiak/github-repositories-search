import renderer from 'react-test-renderer'
import { NotFound } from '../notFound'

it('renders correctly', () => {
  const tree = renderer.create(<NotFound />).toJSON()
  expect(tree).toMatchSnapshot()
})

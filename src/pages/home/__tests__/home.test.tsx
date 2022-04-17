import renderer from 'react-test-renderer'
import { Home } from '../home'

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON()
  expect(tree).toMatchSnapshot()
})

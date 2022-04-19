import { Home } from '../home'
import { render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../store/store'

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

const MockComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  )
}

describe('Home', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<MockComponent />)
    expect(asFragment()).toMatchSnapshot()
  })
})

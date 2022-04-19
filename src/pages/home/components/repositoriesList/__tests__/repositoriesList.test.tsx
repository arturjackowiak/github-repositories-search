import { RepositoriesList } from '../repositoriesList'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../../../store/store'

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
        <RepositoriesList />
      </BrowserRouter>
    </Provider>
  )
}

describe('RepositoriesList', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<MockComponent />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('shows empty tabel with labels', () => {
    render(<MockComponent />)
    expect(screen.getByText('No Data')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Owner')).toBeInTheDocument()
    expect(screen.getByText('Stars')).toBeInTheDocument()
    expect(screen.getByText('Created at')).toBeInTheDocument()
  })

})

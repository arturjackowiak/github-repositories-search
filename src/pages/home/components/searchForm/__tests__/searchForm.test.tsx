import { SearchForm } from '../searchForm'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../../../../../store/store'

const MockComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SearchForm />
      </BrowserRouter>
    </Provider>
  )
}

describe('SearchForm', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<MockComponent />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('shows input and select fields', () => {
    render(<MockComponent />)
    expect(
      screen.getByPlaceholderText('Github repository name...')
    ).toBeInTheDocument()
    expect(screen.getByTitle('10')).toBeInTheDocument()
  })

  it('should change input and select values', (): void => {
    render(<MockComponent />)

    fireEvent.change(screen.getByPlaceholderText('Github repository name...'), {
      target: { value: 'Test' },
    })
    fireEvent.mouseDown(screen.getAllByRole('combobox')[0])
    fireEvent.mouseDown(screen.getByText('15'))

    expect(
      screen.getByPlaceholderText('Github repository name...')
    ).toHaveValue('Test')
    expect(screen.getByTitle('15')).toBeInTheDocument()
  })
})

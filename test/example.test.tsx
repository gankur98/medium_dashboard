import { render, screen } from '@testing-library/react'
import Dashboard from '../pages/index'

test('renders title', () => {
  render(<Dashboard />)
  expect(screen.getByText(/Medium Dashboard/i)).toBeInTheDocument()
})

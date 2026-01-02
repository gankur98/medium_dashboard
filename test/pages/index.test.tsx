import { render, screen } from '@testing-library/react'
import React from 'react'

// mock the Chart component to avoid ResizeObserver/loadable issues in this test
jest.mock('../../components/Chart', () => () => <div data-testid="chart" />)

test('renders the dashboard header', async () => {
  // mock fetch used by the dashboard
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(globalThis as any).fetch = jest.fn().mockResolvedValue({ json: jest.fn().mockResolvedValue([]) })

  const { default: Dashboard } = await import('../../pages/index')
  render(<Dashboard />)
  expect(await screen.findByText(/Medium Dashboard/i)).toBeInTheDocument()
})

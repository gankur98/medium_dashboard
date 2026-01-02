import { render, screen } from '@testing-library/react'
import Chart from '../../components/Chart'

test('renders chart svg when given data', () => {
  const data = [
    { timestamp: new Date().toISOString(), value: 10 },
    { timestamp: new Date().toISOString(), value: 20 }
  ]
  // Render inside a wrapper with explicit size so ResponsiveContainer computes non-zero width/height
  const { container } = render(
    <div style={{ width: 500, height: 300 }}>
      <Chart data={data} />
    </div>
  )
  // Recharts renders an SVG element
  expect(container.querySelector('svg')).toBeTruthy()
})
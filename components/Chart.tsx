import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts'

type Metric = { timestamp: string; value: number }

export default function Chart({ data }: { data: Metric[] }) {
  const formatted = data.map((d) => ({ ...d, timestamp: new Date(d.timestamp).toLocaleString() }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={formatted}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" hide />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

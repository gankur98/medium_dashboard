import type { NextApiRequest, NextApiResponse } from 'next'

// Sample generated metrics for the dashboard
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = Date.now()
  const data = Array.from({ length: 24 }).map((_, i) => ({
    timestamp: new Date(now - (23 - i) * 60 * 60 * 1000).toISOString(),
    value: Math.round(100 + Math.sin(i / 3) * 30 + Math.random() * 20)
  }))

  res.status(200).json(data)
}

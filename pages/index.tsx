import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('../components/Chart'), { ssr: false })

type Metric = { timestamp: string; value: number }

export default function Dashboard() {
  const [data, setData] = useState<Metric[]>([])

  useEffect(() => {
    fetch('/api/metrics')
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(() => setData([]))
  }, [])

  return (
    <div className="min-h-screen p-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Medium Dashboard (Sample)</h1>
        <p className="text-sm text-gray-600 mt-1">Example metrics and chart</p>
      </header>

      <main>
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Traffic</h2>
          <div style={{ width: '100%', height: 300 }}>
            <Chart data={data} />
          </div>
        </section>
      </main>
    </div>
  )
}

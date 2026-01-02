import '@testing-library/jest-dom/extend-expect'

// provide a basic fetch mock so components that call `fetch` won't crash during tests
if (typeof globalThis.fetch === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(globalThis as any).fetch = () => Promise.resolve({ json: () => [] })
}
import '@testing-library/jest-dom'

// provide a basic fetch mock so components that call `fetch` won't crash during tests
if (typeof globalThis.fetch === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(globalThis as any).fetch = () => Promise.resolve({ json: () => [] })
}

// JSDOM doesn't implement ResizeObserver which Recharts expects — provide a tiny mock
if (typeof (globalThis as any).ResizeObserver === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(globalThis as any).ResizeObserver = class {
    cb: any
    constructor(cb: any) {
      this.cb = cb
    }
    observe(target?: Element) {
      // call the callback immediately with a plausible size
      this.cb([{ contentRect: { width: 500, height: 300 } }])
    }
    unobserve() {}
    disconnect() {}
  }
}

// Suppress noisy act(...) warnings in tests that are known and not failing the assertions
const _consoleError = console.error.bind(console)
console.error = (...args: unknown[]) => {
  try {
    if (typeof args[0] === 'string' && (args[0] as string).includes('not wrapped in act')) {
      return
    }
  } catch (e) {
    // fall through to original console.error
  }
  _consoleError(...args)
}
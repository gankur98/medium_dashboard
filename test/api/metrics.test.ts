import handler from '../../pages/api/metrics'

test('api/metrics returns array of metrics', () => {
  const req = {} as any
  const json = jest.fn()
  const status = jest.fn().mockReturnValue({ json })
  const res = { status } as any

  handler(req, res)
  expect(status).toHaveBeenCalledWith(200)
  expect(json).toHaveBeenCalledWith(expect.any(Array))
})
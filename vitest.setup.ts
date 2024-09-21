import { vi } from 'vitest'
import { expect } from 'vitest'
import * as matchers from 'vitest-axe/matchers'
import '@testing-library/jest-dom'
import 'vitest-axe/extend-expect'

expect.extend(matchers)

vi.mock('next/router', () => require('next-router-mock'))

global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

window.HTMLCanvasElement.prototype.getContext = vi
  .fn()
  .mockImplementation(() => ({}))

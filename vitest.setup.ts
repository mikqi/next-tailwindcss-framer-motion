import { vi } from 'vitest'
import '@testing-library/jest-dom'

vi.mock('next/router', () => require('next-router-mock'))

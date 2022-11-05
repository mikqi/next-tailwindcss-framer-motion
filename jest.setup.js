import '@testing-library/jest-dom/extend-expect'

global.window = {}
global.window = global

jest.mock('next/router', () => require('next-router-mock'))

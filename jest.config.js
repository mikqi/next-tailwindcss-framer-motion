const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverageFrom: [
    'app/**/*.(ts|tsx)',
    'components/**/*.(ts|tsx)',
    'utils/**/*.(ts|tsx)',
    '!utils/test/**/*.(ts|tsx)',
  ],
  collectCoverage: true,
}

module.exports = createJestConfig(jestConfig)

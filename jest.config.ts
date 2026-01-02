import nextJest from 'next/jest'
import type { Config } from '@jest/types'

const createJestConfig = nextJest({ dir: './' })

const customJestConfig: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  testEnvironment: 'jsdom'
}

export default createJestConfig(customJestConfig)
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
    verbose: true,
    coverageProvider: 'v8',
    collectCoverage: true,
    collectCoverageFrom: ['./src/**'],
    coverageThreshold: {
        global: {
            lines: 90,
        },
    },
    testEnvironment: 'jsdom',
    testMatch: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/'],
    transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
};

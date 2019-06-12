module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>tests/setupTests.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/index.ts',
    '!src/theme*',
    '!**/node_modules/**',
  ],
  transform: {
    '.js': 'babel-jest',
    '.(ts|tsx)': 'ts-jest',
  },
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!node-formatter)',
  ],
  testMatch: null,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/templates/',
    '/.cache',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": '<rootDir>/__mocks__/file.js',
  },
  collectCoverage: true,
  coverageReporters: [
    'lcov',
    'html',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    },
  }
};

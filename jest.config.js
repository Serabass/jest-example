module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'cov',
  coverageReporters: ['clover', 'lcov', 'text'],
  verbose: false,
  collectCoverageFrom : [
    "src/**/*.ts"
  ]
};

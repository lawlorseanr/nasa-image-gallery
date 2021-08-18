const config = {
  testEnvironment: 'jsdom',
  verbose: true,
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/data.json',
    '<rootDir>/__tests__/api.js',
  ],
};

module.exports = config;

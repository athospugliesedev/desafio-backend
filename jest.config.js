export default {
  testEnvironment: 'node',
  clearMocks: true,
  coverageDirectory: 'coverage',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },  
};


export default {
  preset: "ts-jest",
  testEnvironment: 'jsdom',
  testMatch: ['**/*.spec.ts'],
  testPathIgnorePatterns: ['./node_modules/']
};
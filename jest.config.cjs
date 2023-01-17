
module.exports = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{ts,js,vue}'
    ],
    coveragePathIgnorePatterns: [
      '!src/main.ts',
      '!src/router.ts',
      '!src/plugins/*',
      '!src/types/*',
      '!src/model/*',
      '!*.d.ts',
    ],
    coverageReporters: ['text'],
    rootDir: './',
    moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '^.+\\.vue$': '@vue/vue3-jest',
      '^.+\\.tsx?$': 'ts-jest'
    },
    testPathIgnorePatterns : [
      "./src/assets/*" 
    ],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
    testEnvironmentOptions: {
      customExportConditions: ["node", "node-addons"],
   },
  }
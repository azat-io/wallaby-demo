module.exports = function () {
  return {
    files: ['**/*.ts', '**/*.tsx', '!**/*.test.ts'],
    tests: ['**/*.test.ts'],
    autoDetect: true,
  }
}

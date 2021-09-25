/* eslint-disable no-unused-vars */
module.exports = {
  '*.{ts,tsx}': (filenames) => [
    'npm run format:fix',
    'npm run validate',
    // 'npm run format:check',
    // 'npm run lint',
    // 'npm run type:check',
  ],
}

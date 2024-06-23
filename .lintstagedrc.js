const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(provess.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand],
}
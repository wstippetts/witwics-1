const ALWAYS = 'always'
const NEVER = 'never'
const ERROR = 2
const WARN = 1
const OFF = 0

module.exports = {
  root: true,
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': WARN,
    'no-debugger': WARN,
    'space-before-function-paren': [WARN, NEVER]
  }
}
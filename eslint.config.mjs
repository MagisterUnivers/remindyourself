import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'semi': ['error', 'never'],
      'eqeqeq': ['error', 'always'],
      'no-magic-numbers': ['warn', { 'ignoreArrayIndexes': true, 'ignore': [0, 1] }],
      'quotes': ['error', 'single'],
    },
  },
]

export default eslintConfig

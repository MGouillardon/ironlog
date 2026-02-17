import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    tooling: true,
  },
}).append({
  rules: {
    'prettier/prettier': 'warn',
  },
  plugins: {
    prettier: (await import('eslint-plugin-prettier')).default,
  },
})

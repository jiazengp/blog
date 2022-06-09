import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig =  {
  extends: ['@commitlint/config-conventional'],
  rules: {
    scopeEnum: [2, 'always'],
  },
}

module.exports = Configuration;

import { flags } from '@oclif/command';

export const deployFlags = {
  help: flags.help({ char: 'h' }),
  limit: flags.integer({
    char: 'l',
    description: 'Define how many commits you want to choose from',
    default: 10
  }),
  commit: flags.boolean({
    char: 'c',
    description: 'Use if you want to deploy for a specific commit, otherwise it will be the last commit',
    default: false
  }),
  path: flags.string({
    char: 'p',
    description: 'Use a path where your repository is checked out that you want to deploy, otherwise it will be the current one',
    default: () => process.cwd()
  }),
  from: flags.string({
    char: 'f',
    description: 'Define the from branch name which should be deployed to the production branch',
    default: 'master',
    env: 'DEPLOZ_CLI_FROM_BRANCH'
  })
};

import { Command, flags } from '@oclif/command';
import * as simplegit from 'simple-git/promise';
import { selectCommit } from '../lib/select-commit';
import { OptionsValues } from 'simple-git/src/lib/types';
import cli from 'cli-ux';
import { deployFlags } from '../lib/deploy-flags';

export default class Client extends Command {
  static description = 'Deploys a client app to production. It uses a defined branch as the state of the production app'

  static flags = {
    ...deployFlags,
    branch: flags.string({
      char: 'b',
      description: 'Define the branch name that you want to use as your production branch',
      default: 'production',
      env: 'DEPLOZ_CLI_CLIENT_BRANCH'
    })
  }

  get flags() {
    const { flags } = this.parse(Client);
    return flags;
  }

  get git() {
    return simplegit(this.flags.path);
  }

  async run() {
    await this.git.pull('origin', 'master');
    await this.git.push('origin', 'master');

    const reference = await this.getReference();
    const branch = `${reference}:${this.flags.branch}`;

    await this.deploy(branch, this.getOptions());
  }

  private async getReference() {
    if (!this.flags.commit) {
      return 'master';
    }

    return this.selectCommit();
  }

  private async selectCommit() {
    const { all: logs } = await this.git.log();
    return selectCommit(logs, this.flags.limit);
  }

  private getOptions(): Record<string, OptionsValues> {
    return this.flags.commit ? { '-f': null } : {};
  }

  private async deploy(branch: string, options: Record<string, OptionsValues>) {
    cli.action.start('deploying');
    await this.git.push('origin', branch, options);
    cli.action.stop();
  }
}

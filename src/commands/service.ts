import { Command, flags } from '@oclif/command';
import * as simplegit from 'simple-git/promise';
import { calculateReleaseTag } from '../lib/service/calculate-release-tag';
import { selectCommit } from '../lib/select-commit';
import cli from 'cli-ux';
import { deployFlags } from '../lib/deploy-flags';

export default class Service extends Command {
  static description = 'Deploys a service app to production. It creates an incremental tag for the selected commit based in the tag prefix given'

  static flags = {
    ...deployFlags,
    tag: flags.string({
      char: 't',
      description: 'Define the tag prefix that you want to use as the prefix for your production deploys',
      default: 'release-production',
      env: 'DEPLOZ_CLI_SERVICE_RELEASE_PREFIX'
    })
  };

  get flags() {
    const { flags } = this.parse(Service);
    return flags;
  }

  get git() {
    return simplegit(this.flags.path);
  }

  async run() {
    const nextTag = await this.getNextReleaseTag();
    this.log(`next tag will be: ${nextTag}`);

    if (this.flags.commit) {
      await this.createTagForCommit(nextTag);
    } else {
      await this.git.addTag(nextTag);
    }

    await this.deploy();
  }

  private async getNextReleaseTag(): Promise<string> {
    const { all: tags } = await this.git.tags();
    return calculateReleaseTag(this.flags.tag, tags);
  }

  private async createTagForCommit(nextTag: string) {
    const commitHash = await this.selectCommit();
    await this.git.tag([nextTag, commitHash]);
  }

  private async selectCommit() {
    const { all: logs } = await this.git.log();
    return selectCommit(logs, this.flags.limit);
  }

  private async deploy() {
    cli.action.start('deploying');
    await this.git.pushTags('origin');
    cli.action.stop();
  }
}

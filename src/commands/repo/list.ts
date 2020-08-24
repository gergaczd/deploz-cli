import { Command } from '@oclif/command';
import { RepositoryStore } from '../../lib/repository';
import cli from 'cli-ux';

export default class List extends Command {
  static description = 'Lists the added repositories'

  async run() {
    const store = new RepositoryStore();
    const repositories = store.getRepositories();

    cli.table(repositories, { path: {}, type: {} });
  }
}

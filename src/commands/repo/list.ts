import { Command } from '@oclif/command';
import { RepositoryStore } from '../../lib/repository';
import cli from 'cli-ux';

export default class List extends Command {
  static description = 'Lists the added repositories'

  async run() {
    const store = new RepositoryStore();
    const repositories = store.getRepositories();

    if (repositories.length === 0) {
      console.log('There are no saved repository');
      return;
    }

    cli.table(repositories, { path: {}, type: {} });
  }
}

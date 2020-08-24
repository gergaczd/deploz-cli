import { Command, flags } from '@oclif/command';
import { RepositoryStore } from '../../lib/repository';
import { selectRepository } from '../../lib/select-repository';

export default class Remove extends Command {
  static description = 'Removes a repository'

  static flags = {
    help: flags.help({ char: 'h' })
  }

  async run() {
    const store = new RepositoryStore();

    const repositories = store.getRepositories();

    const repositoryIndex = await selectRepository(repositories);

    store.removeRepository(repositoryIndex);
  }
}

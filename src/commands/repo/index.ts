import { Command } from '@oclif/command';
import { RepositoryStore } from '../../lib/repository';
import { selectRepository } from '../../lib/select-repository';
import { RepositoryDescriptor } from '../../lib/repository/schema';
import Service from '../service';
import Client from '../client';
import { deployFlags } from '../../lib/deploy-flags';

export default class Repo extends Command {
  static description = 'Manages and deploys predefined repositories'

  static flags = {
    help: deployFlags.help,
    commit: deployFlags.commit,
    limit: deployFlags.limit
  }

  private deployClassMap = {
    client: Client,
    service: Service
  }

  private get flags() {
    const { flags } = this.parse(Repo);
    return flags;
  }

  async run() {
    const store = new RepositoryStore();

    const repositories = store.getRepositories();

    const selectedRepository = await this.selectRepository(repositories);

    const deployClass = this.getDeployClass(selectedRepository);

    await deployClass.run(this.getDeployOptions(selectedRepository));
  }

  private async selectRepository(repositories: RepositoryDescriptor[]) {
    const repositoryIndex = await selectRepository(repositories);
    return repositories[repositoryIndex];
  }

  private getDeployClass(repository: RepositoryDescriptor): typeof Command {
    if (!this.isValidType(repository.type)) {
      throw new Error(`the given type is not defined: ${repository.type}`);
    }

    return repository.type === 'client' ? this.deployClassMap.client : this.deployClassMap.service;
  }

  private getDeployOptions(selectedRepository: RepositoryDescriptor) {
    const commitOption = this.flags.commit ? ['--commit'] : [];
    return [
      '--path',
      selectedRepository.path,
      ...commitOption,
      '--limit',
      `${this.flags.limit}`
    ];
  }

  private isValidType(type: string): boolean {
    return Object.keys(this.deployClassMap).includes(type);
  }
}


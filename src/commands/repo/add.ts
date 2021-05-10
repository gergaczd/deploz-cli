import { Command, flags } from '@oclif/command';
import { RepositoryStore } from '../../lib/repository';

export default class Add extends Command {
  static description = 'Adds a repository'

  static flags = {
    help: flags.help({ char: 'h' }),
    path: flags.string({
      char: 'p',
      description: 'Use a path where your repository is checked out that you want to deploy, otherwise it will be the current one',
      default: () => process.cwd()
    })
  }

  static args = [
    {
      name: 'type',
      required: true,
      description: 'Define the type of the repository, it specifies how it will be deployed',
      options: ['service', 'client']
    }
  ]

  async run() {
    const { args, flags } = this.parse(Add);

    const store = new RepositoryStore();
    store.addRepository(flags.path, args.type);
  }
}

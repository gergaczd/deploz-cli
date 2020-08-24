import {Command, flags} from '@oclif/command';
import { RepositoryStore } from '../../lib/repository';

export default class Add extends Command {
  static description = 'Adds a repository'

  static flags = {
    help: flags.help({ char: 'h' })
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
    const { args } = this.parse(Add);

    const store = new RepositoryStore();
    store.addRepository(process.cwd(), args['type']);
  }
}

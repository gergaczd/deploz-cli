import {RepositoryDescriptor, schema} from "./schema";
import Conf from "conf";

export class Store {
  private readonly conf: Conf;

  constructor() {
    this.conf = new Conf({ schema });
  }

  getRepositories(): RepositoryDescriptor[] {
    return (this.conf.get('repositories') || []) as RepositoryDescriptor[];

  }

  setRepositories(repositories: RepositoryDescriptor[]) {
    this.conf.set('repositories', repositories);
  }
}

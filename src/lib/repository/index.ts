import { RepositoryDescriptor } from './schema';
import {Store} from "./store";

export class RepositoryStore {
  private readonly store: Store;

  constructor() {
    this.store = new Store();
  }

  addRepository(path: string, type: string) {
    if (this.isExists(path, type)) {
      return;
    }

    const repositories = this.getRepositories();
    const newRepositories = repositories.concat({ path, type });

    this.store.setRepositories(newRepositories);
  }

  removeRepository(removeIndex: number) {
    const filteredRepositories = this.getRepositories()
    .filter((repo, index) => index !== removeIndex);

    this.store.setRepositories(filteredRepositories);
  }

  getRepositories(): RepositoryDescriptor[] {
    return this.store.getRepositories();
  }

  private isExists(path: string, type: string) {
    const isSameRepo = (repo: RepositoryDescriptor) => repo.path === path && repo.type === type;
    return this.getRepositories().some(isSameRepo);
  }
}

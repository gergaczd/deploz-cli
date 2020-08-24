import * as prompts from 'prompts';
import { RepositoryDescriptor } from './repository/schema';

export const selectRepository = async (repositories: RepositoryDescriptor[]) => {
  const formattedRepositories = repositories.map((repo, index) => {
    return {
      value: index,
      title: `${repo.path} - (${repo.type})`
    };
  });

  const { value: selectedRepository } = await prompts({
    type: 'select',
    name: 'value',
    message: 'Choose a repo: ',
    choices: formattedRepositories,
    initial: 1
  });

  return selectedRepository;
};

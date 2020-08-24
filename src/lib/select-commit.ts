import * as prompts from 'prompts';
import { DefaultLogFields } from 'simple-git';

const formatLog = (log: DefaultLogFields) => {
  return {
    value: log.hash,
    title: `${log.date} - ${log.message}`,
    description: log.refs
  };
};

export const selectCommit = async (logs: readonly DefaultLogFields[], limit: number) => {
  const formattedLogs = logs
  .slice(0, limit)
  .map(formatLog);

  const { value: response } = await prompts({
    type: 'select',
    name: 'value',
    message: 'Choose a commit: ',
    choices: formattedLogs,
    initial: 1
  });

  return response;
};

import * as prompts from 'prompts';
import { DefaultLogFields } from 'simple-git';

const formatLog = (highlightRefMatcher: string) => (log: DefaultLogFields) => {
  const isMatch = log.refs.includes(highlightRefMatcher);
  const label = isMatch ? '(Current production)' : '';
  return {
    value: log.hash,
    title: `${log.date} - ${log.message} ${label}`,
    disabled: isMatch,
    description: log.refs
  };
};

export const selectCommit = async (logs: readonly DefaultLogFields[], limit: number, highlightRefMatcher: string) => {
  const formattedLogs = logs
  .slice(0, limit)
  .map(formatLog(highlightRefMatcher));

  const { value: response } = await prompts({
    type: 'select',
    name: 'value',
    message: 'Choose a commit: ',
    choices: formattedLogs,
    initial: 0
  });

  return response;
};

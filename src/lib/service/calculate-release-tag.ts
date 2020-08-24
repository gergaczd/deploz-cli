export const calculateReleaseTag = (prefix: string, tags: string[]): string => {
  const normalizedPrefix = `${prefix}-`;
  const versions = tags
  .filter(tag => tag.startsWith(normalizedPrefix))
  .map(tag => tag.replace(normalizedPrefix, ''))
  .map(version => parseInt(version, 10));

  const lastVersion = Math.max(...versions, 0);

  return `${prefix}-${lastVersion + 1}`;
};

const getTagNumberFactory = (prefix: string) => (tag: string): number => {
  return parseInt(tag.replace(prefix, ''), 10);
};

export const getLatestTag = (prefix: string, tags: string[]): string => {
  const normalizedPrefix = `${prefix}-`;
  const getTagNumber = getTagNumberFactory(normalizedPrefix);
  const orderedTags = tags
  .filter(tag => tag.startsWith(normalizedPrefix))
  .sort((firstTag, secondTag) => {
    return getTagNumber(firstTag) - getTagNumber(secondTag);
  });

  return orderedTags.pop() || `${normalizedPrefix}1`;
};

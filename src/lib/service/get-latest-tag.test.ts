import { getLatestTag } from './get-latest-tag';
import { expect } from '@oclif/test';

describe('#getLatestTag', () => {
  it('should return with the tag that has the highest number', () => {
    const tags = ['release-2', 'release-3', 'release-1'];
    const latestTag = getLatestTag('release', tags);
    expect(latestTag).to.equal('release-3');
  });

  it('should filter out tags with different prefix', () => {
    const tags = ['release-2', 'releases-3'];
    const latestTag = getLatestTag('release', tags);

    expect(latestTag).to.equal('release-2');
  });

  it('should return with empty string when no tag matches the criteria', () => {
    const tags = ['other-2', '-release-1'];
    const latestTag = getLatestTag('release', tags);
    expect(latestTag).to.equal('release-1');
  });
});

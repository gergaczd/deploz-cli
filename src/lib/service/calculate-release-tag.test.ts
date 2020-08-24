import { expect } from '@oclif/test';
import { calculateReleaseTag } from './calculate-release-tag';

describe('#calculateReleaseTag', () => {
  it('should increment the biggest tag', () => {
    const tag = calculateReleaseTag('test', ['test-1', 'test-3', 'test-2']);
    expect(tag).to.deep.equal('test-4');
  });

  it('should ignore tags with other prefix', () => {
    const tag = calculateReleaseTag('test', ['first-test-2', 'test-1']);
    expect(tag).to.deep.equal('test-2');
  });

  it('should ignore tags without dash before incremental number', () => {
    const tag = calculateReleaseTag('test', ['test-1', 'test2']);
    expect(tag).to.deep.equal('test-2');
  });

  it('should initialize the first tag with 1 if there is no match', () => {
    const tag = calculateReleaseTag('other', []);
    expect(tag).to.deep.equal('other-1');
  });
});

import { describe, it, expect } from 'vitest';
import { parseGithubUrl } from './github';

describe('parseGithubUrl', () => {
  it('extracts owner and repo from a GitHub URL', () => {
    expect(parseGithubUrl('https://github.com/luis/codeflow')).toEqual({
      owner: 'luis',
      repo: 'codeflow',
    });
  });
});

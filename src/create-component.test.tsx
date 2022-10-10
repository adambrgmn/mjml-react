import { describe, expect, it } from 'vitest';

import { handleMjmlProps } from './create-component';

describe('handleMjmlProps', () => {
  it('transforms camelCases props to kebab case', () => {
    expect(handleMjmlProps({ textAlign: 'center', fontSize: '12px' })).toEqual({
      'font-size': '12px',
      'text-align': 'center',
    });
  });

  it('handles special case prop "full-width"', () => {
    expect(handleMjmlProps({ fullWidth: true })).toEqual({ 'full-width': 'full-width' });
    expect(handleMjmlProps({ fullWidth: false })).toEqual({ 'full-width': 'false' });

    expect(handleMjmlProps({ fullWidth: undefined })).toEqual({ 'full-width': undefined });
    expect(handleMjmlProps({ fullWidth: 'full-width' })).toEqual({ 'full-width': undefined });
    expect(handleMjmlProps({ fullWidth: 'true' })).toEqual({ 'full-width': undefined });
    expect(handleMjmlProps({ fullWidth: 'false' })).toEqual({ 'full-width': undefined });
  });
});

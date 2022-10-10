import { describe, expect, it } from 'vitest';

import { camelCase, kebabCase, studlyCaps } from './strings';

describe('camelCase', () => {
  it('transforms a string to camel case', () => {
    expect(camelCase('CamelCase')).toEqual('camelCase');
    expect(camelCase('camelCase')).toEqual('camelCase');
    expect(camelCase('Camel case')).toEqual('camelCase');
    expect(camelCase('Camel  case')).toEqual('camelCase');
    expect(camelCase('camel Case')).toEqual('camelCase');
    expect(camelCase('camel-case')).toEqual('camelCase');
    expect(camelCase('-camel--case')).toEqual('camelCase');
    expect(camelCase('camel_case')).toEqual('camelCase');
    expect(camelCase('     camel_case')).toEqual('camelCase');
  });
});

describe('kebabCase', () => {
  it('transforms a string to kebab case', () => {
    expect(kebabCase('kebabCase')).toEqual('kebab-case');
    expect(kebabCase('kebab-Case')).toEqual('kebab-case');
    expect(kebabCase('kebab case')).toEqual('kebab-case');
    expect(kebabCase('kebab  case')).toEqual('kebab-case');
    expect(kebabCase('kebab Case')).toEqual('kebab-case');
    expect(kebabCase('kebab-case')).toEqual('kebab-case');
    expect(kebabCase('-kebab--case')).toEqual('kebab-case');
    expect(kebabCase('kebab_case')).toEqual('kebab-case');
    expect(kebabCase('     kebab_case')).toEqual('kebab-case');
  });
});

describe('studlyCaps', () => {
  it('transforms a string to studly case', () => {
    expect(studlyCaps('studlyCaps')).toEqual('StudlyCaps');
    expect(studlyCaps('studly-Caps')).toEqual('StudlyCaps');
    expect(studlyCaps('studly caps')).toEqual('StudlyCaps');
    expect(studlyCaps('studly  caps')).toEqual('StudlyCaps');
    expect(studlyCaps('studly Caps')).toEqual('StudlyCaps');
    expect(studlyCaps('studly-caps')).toEqual('StudlyCaps');
    expect(studlyCaps('-studly--caps')).toEqual('StudlyCaps');
    expect(studlyCaps('studly_caps')).toEqual('StudlyCaps');
    expect(studlyCaps('     studly_caps--')).toEqual('StudlyCaps');
  });
});

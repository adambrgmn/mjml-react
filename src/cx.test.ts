import { expect, it } from 'vitest';

import { cx } from './cx';

it('can build up a class name string from an unknown array of arguments', () => {
  expect(cx('foo', 'bar')).toEqual('foo bar');
  expect(cx('foo', 'bar', 1)).toEqual('foo bar 1');
});

it('trims the start and end of provided strings', () => {
  expect(cx(' foo', ' bar')).toEqual('foo bar');
});

it('can take an array and build up class names', () => {
  expect(cx(['foo', 'bar'])).toEqual('foo bar');
});

it('can take an object and apply the keys as class names if their values can be cast to true', () => {
  expect(cx({ foo: true, bar: 'yep', baz: null, bax: false })).toEqual('foo bar');
});

it('can handle a mixture of all possible values', () => {
  expect(
    cx('a', 'b', ['c', 'd'], { e: 'yep', f: false, g: true }, [
      { h: 'yep', i: true, j: false },
      'k',
      'l',
      ['m', 'n', 'o'],
    ]),
  ).toEqual('a b c d e g h i k l m n o');
});

it('returns `undefined` if the class name is empty', () => {
  expect(cx()).toBeUndefined();
  expect(cx({ foo: false, boo: false })).toBeUndefined();
  expect(cx('', '')).toBeUndefined();
});

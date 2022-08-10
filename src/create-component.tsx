import { kebabCase } from 'lodash-es';
import React from 'react';
import { KebabCasedProperties } from 'type-fest';

import { MjmlComponent } from './types';

export function handleMjmlProps<T extends Record<string, unknown>>(props: T): KebabCasedProperties<T> {
  let converted: Record<string, unknown> = {};
  for (let [key, value] of Object.entries(props)) {
    converted[kebabCase(key)] = value;
  }
  return converted as KebabCasedProperties<T>;
}

export function createComponent<Props extends Record<string, unknown>>(Name: string): MjmlComponent<Props> {
  const Component: MjmlComponent<Props> = ({ className, cssClass, children, ...rest }) => {
    let props = handleMjmlProps(rest);
    return (
      // @ts-expect-error
      <Name {...props} css-class={cssClass ?? className}>
        {children}
      </Name>
    );
  };
  Component.displayName = Name;

  return Component;
}

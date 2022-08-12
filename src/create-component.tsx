import { kebabCase } from 'lodash-es';
import React, { useContext } from 'react';
import { KebabCasedProperties } from 'type-fest';

import { EndingTagContext } from './ending-tag-context';
import { MjmlComponent } from './types';

export function handleMjmlProps<T extends Record<string, unknown>>(props: T) {
  let converted: Record<string, unknown> = {};
  for (let [key, value] of Object.entries(props)) {
    converted[kebabCase(key)] = value;
  }
  return converted as KebabCasedProperties<T>;
}

export function createComponent<Props extends Record<string, unknown>>(Name: string, endingTag: boolean) {
  const Component: MjmlComponent<Props> = ({ className, cssClass, children, ...rest }) => {
    let props = handleMjmlProps(rest);

    let isEndingTag = useContext(EndingTagContext);
    if (isEndingTag) {
      throw new Error(
        `Rendering any mjml component inside another ending tag is not supported. See https://documentation.mjml.io/#ending-tags for information about ending tags.`,
      );
    }

    return (
      // @ts-expect-error
      <Name {...props} css-class={cssClass ?? className}>
        <EndingTagContext.Provider value={endingTag}>{children}</EndingTagContext.Provider>
      </Name>
    );
  };
  Component.displayName = Name;

  return Component;
}

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

    return (
      <MjmlComponentWrapper endingTag={endingTag}>
        {/**
        // @ts-expect-error */}
        <Name {...props} css-class={cssClass ?? className}>
          {children}
        </Name>
      </MjmlComponentWrapper>
    );
  };
  Component.displayName = Name;

  return Component;
}

export const MjmlComponentWrapper: React.FC<{ endingTag?: boolean; children: React.ReactNode }> = ({
  endingTag,
  children,
}) => {
  let isInsideEndingTag = useContext(EndingTagContext);
  if (isInsideEndingTag) {
    throw new Error(
      `
Rendering any mjml component inside another mjml component which is an ending tag is not supported.
See https://documentation.mjml.io/#ending-tags for information about ending tags.`.trim(),
    );
  }

  return <EndingTagContext.Provider value={endingTag ?? false}>{children}</EndingTagContext.Provider>;
};

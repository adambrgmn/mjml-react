import React, { useContext } from 'react';

import { cx } from './cx';
import { EndingTagContext } from './ending-tag-context';
import { kebabCase } from './strings';
import { MjmlComponent } from './types';

export function handleMjmlProps<T extends Record<string, unknown>>(props: T) {
  let converted: Record<string, unknown> = {};
  for (let [key, value] of Object.entries(props)) {
    switch (key) {
      case 'fullWidth':
        converted[kebabCase(key)] = value === true ? 'full-width' : value === false ? 'false' : undefined;
        break;

      default:
        converted[kebabCase(key)] = value;
    }
  }

  return converted;
}

export function createComponent<Props extends Record<string, unknown>>(Name: string, endingTag: boolean) {
  const Component: MjmlComponent<Props> = ({ className, cssClass, children, ...rest }) => {
    let props = handleMjmlProps(rest);

    return (
      <MjmlComponentWrapper name={Name} endingTag={endingTag}>
        {/**
        // @ts-expect-error */}
        <Name {...props} css-class={cx(className, cssClass)}>
          {children}
        </Name>
      </MjmlComponentWrapper>
    );
  };
  Component.displayName = Name;

  return Component;
}

export const MjmlComponentWrapper: React.FC<{ name: string; endingTag?: boolean; children: React.ReactNode }> = ({
  name,
  endingTag = false,
  children,
}) => {
  let { isInsideEndingTag, component } = useContext(EndingTagContext);
  if (isInsideEndingTag) {
    throw new Error(
      `
Rendering any mjml component inside another mjml component which is an ending tag is not supported.

This error was thrown since \`${name}\` was rendered inside \`${component}\`.

See https://documentation.mjml.io/#ending-tags for information about ending tags.`.trim(),
    );
  }

  return (
    <EndingTagContext.Provider value={{ isInsideEndingTag: endingTag, component: name }}>
      {children}
    </EndingTagContext.Provider>
  );
};

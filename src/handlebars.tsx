import React, { Fragment } from 'react';

import { MjRaw } from './components';

const HandlebarsTag: React.FC<{ tag: string; condition: string; inline?: boolean; children: React.ReactNode }> = ({
  tag,
  condition,
  inline,
  children,
}) => {
  let start = `{{ #${tag} ${condition} }}`;
  let end = `{{ /${tag} }}`;
  return (
    <Fragment>
      {inline ? start : <MjRaw>{start}</MjRaw>}
      {children}
      {inline ? end : <MjRaw>{end}</MjRaw>}
    </Fragment>
  );
};

export const If: React.FC<{
  condition: string;
  else?: React.ReactNode;
  inline?: boolean;
  children: React.ReactNode;
}> = ({ condition, else: elseHandler, inline, children }) => {
  return (
    <HandlebarsTag tag="if" condition={condition} inline={inline}>
      {children}
      {elseHandler != null ? <Else inline={inline}>{elseHandler}</Else> : null}
    </HandlebarsTag>
  );
};

export const ElseIf: React.FC<{ condition: string; inline?: boolean; children: React.ReactNode }> = ({
  condition,
  inline,
  children,
}) => {
  let tag = `{{ else if ${condition} }}`;
  return (
    <Fragment>
      {inline ? tag : <MjRaw>{tag}</MjRaw>}
      {children}
    </Fragment>
  );
};

export const Else: React.FC<{ inline?: boolean; children: React.ReactNode }> = ({ inline, children }) => {
  let tag = '{{ else }}';
  return (
    <Fragment>
      {inline ? tag : <MjRaw>{tag}</MjRaw>}
      {children}
    </Fragment>
  );
};

function createComparison(tag: string) {
  const Component: React.FC<{
    left: string;
    right: string;
    else?: React.ReactNode;
    inline?: boolean;
    children: React.ReactNode;
  }> = ({ left, right, else: elseHandler, inline, children }) => {
    return (
      <HandlebarsTag tag={tag} condition={`${left} ${right}`} inline={inline}>
        {children}
        {elseHandler != null ? <Else inline={inline}>{elseHandler}</Else> : null}
      </HandlebarsTag>
    );
  };

  Component.displayName = `${tag.charAt(0).toUpperCase() + tag.slice(1)}`;

  return Component;
}

export const Unless = createComparison('unless');
export const GreaterThan = createComparison('greaterThan');
export const LessThan = createComparison('lessThan');
export const Equals = createComparison('equals');
export const NotEquals = createComparison('notEquals');
export const And = createComparison('and');
export const Or = createComparison('or');

export const Each: React.FC<{ subject: string; inline?: boolean; children: React.ReactNode }> = ({
  subject,
  inline,
  children,
}) => {
  return (
    <HandlebarsTag tag="each" condition={subject} inline={inline}>
      {children}
    </HandlebarsTag>
  );
};

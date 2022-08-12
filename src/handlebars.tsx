import React, { Fragment, useContext } from 'react';

import { EndingTagContext } from './ending-tag-context';
import { MjRaw } from './overrides';

const HandlebarsTag: React.FC<{ tag: string; condition: string; children: React.ReactNode }> = ({
  tag,
  condition,
  children,
}) => {
  let { isInsideEndingTag } = useContext(EndingTagContext);

  let start = `{{ #${tag} ${condition} }}`;
  let end = `{{ /${tag} }}`;
  return (
    <Fragment>
      {isInsideEndingTag ? start : <MjRaw>{start}</MjRaw>}
      {children}
      {isInsideEndingTag ? end : <MjRaw>{end}</MjRaw>}
    </Fragment>
  );
};

export const If: React.FC<{
  condition: string;
  else?: React.ReactNode;
  children: React.ReactNode;
}> = ({ condition, else: elseHandler, children }) => {
  return (
    <HandlebarsTag tag="if" condition={condition}>
      {children}
      {elseHandler != null ? <Else>{elseHandler}</Else> : null}
    </HandlebarsTag>
  );
};

export const ElseIf: React.FC<{ condition: string; children: React.ReactNode }> = ({ condition, children }) => {
  let tag = `{{ else if ${condition} }}`;
  let { isInsideEndingTag } = useContext(EndingTagContext);
  return (
    <Fragment>
      {isInsideEndingTag ? tag : <MjRaw>{tag}</MjRaw>}
      {children}
    </Fragment>
  );
};

export const Else: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let tag = '{{ else }}';
  let { isInsideEndingTag } = useContext(EndingTagContext);
  return (
    <Fragment>
      {isInsideEndingTag ? tag : <MjRaw>{tag}</MjRaw>}
      {children}
    </Fragment>
  );
};

function createComparison(tag: string) {
  const Component: React.FC<{
    left: string;
    right: string;
    else?: React.ReactNode;
    children: React.ReactNode;
  }> = ({ left, right, else: elseHandler, children }) => {
    return (
      <HandlebarsTag tag={tag} condition={`${left} ${right}`}>
        {children}
        {elseHandler != null ? <Else>{elseHandler}</Else> : null}
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

export const Each: React.FC<{ subject: string; children: React.ReactNode }> = ({ subject, children }) => {
  return (
    <HandlebarsTag tag="each" condition={subject}>
      {children}
    </HandlebarsTag>
  );
};

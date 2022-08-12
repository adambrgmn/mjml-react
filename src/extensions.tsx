import React, { useContext } from 'react';

import { EndingTagContext } from './ending-tag-context';

export const MjComment: React.FC<{ children: string }> = ({ children }) => {
  let isEndingTag = useContext(EndingTagContext);
  if (isEndingTag) {
    throw new Error(
      'Rendering a comment inside an ending tag is not supported. See https://documentation.mjml.io/#ending-tags for information about ending tags.',
    );
  }

  // @ts-expect-error
  return <mj-raw dangerouslySetInnerHTML={{ __html: `<!--${children}-->` }} />;
};

export const MjConditionalTag: React.FC<{
  condition?: `if ${string}`;
  children: string;
}> = ({ condition = 'if gte mso 9', children }) => {
  return <MjComment>{`[${condition}]>${children}<![endif]`}</MjComment>;
};

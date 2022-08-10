import React from 'react';

export const MjComment: React.FC<{ children: string }> = ({ children }) => {
  // @ts-expect-error
  return <mj-raw dangerouslySetInnerHTML={{ __html: `<!--${children}-->` }} />;
};

export const MjConditionalTag: React.FC<{
  condition?: `if ${string}`;
  children: string;
}> = ({ condition = 'if gte mso 9', children }) => {
  return <MjComment>{`[${condition}]>${children}<![endif]`}</MjComment>;
};

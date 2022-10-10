import React from 'react';

import { MjmlComponentWrapper } from './create-component';

export const MjComment: React.FC<{ children: string }> = ({ children }) => {
  return (
    <MjmlComponentWrapper name="comment" endingTag>
      {/**
       * @ts-expect-error */}
      <mj-raw dangerouslySetInnerHTML={{ __html: `<!--${children}-->` }} />
    </MjmlComponentWrapper>
  );
};

export const MjConditionalTag: React.FC<{
  condition?: `if ${string}`;
  children: string;
}> = ({ condition = 'if gte mso 9', children }) => {
  return <MjComment>{`[${condition}]>${children}<![endif]`}</MjComment>;
};

import React from 'react';

import styled from 'styled-components';

const Root = styled.div`
 
`;

export default function ({ message }: { message: string }) {
  return (
    <Root>
      <p>No Content: 202</p>
      <p>{ message }</p>
    </Root>
  );
}

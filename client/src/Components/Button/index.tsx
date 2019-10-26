import React from 'react';
import styled from 'styled-components';
import {
  Link,
} from 'react-router-dom';

const BigButton = styled(Link)`
  width: 300px;
  height: 106px;
  background-color: #ffffff;

  .title {
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #313131;
    padding: 8px 10px 8px 8px;
    line-height: 30px;
  }

  &:hover {
    background-color: #635c66;

    .title {
      color: #fff;
    }
  }
`;

export default function ({ title, href }: {title: string, href: string}) {
  return (
    <BigButton to={href}>
      <div className="title">{title}</div>
    </BigButton>
  );
}

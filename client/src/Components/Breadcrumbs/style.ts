import styled from 'styled-components';
import helpers from '@bbc/telescope-kit-helpers';

const {
  black,
  complimentary,
} = helpers.colours;

export const BreadcrumbList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    display: inline-block;
    margin-right: 4px;
    line-height: 1.4;

    :after{
      content: ' > ';
    }

    :last-of-type:after{
      content: '';
    }
  }

  a{
    color: ${black};
    text-decoration: none;
    :hover {
      text-decoration: underline
      }
    :focus {
      outline: 4px solid ${complimentary};
    }  
  }

  @media (max-width: 767px) {
    width: 100%;
    display: block;
  }
`;

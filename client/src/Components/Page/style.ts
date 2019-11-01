import styled from 'styled-components';
import helpers from '@bbc/telescope-kit-helpers';

const {
  black,
  complimentary,
} = helpers.colours;

export const PageContainer = styled.div`

  margin-top: 55px;

  section {
    padding: 14px 0 !important;
    font-size: 14px;
    line-height: 22px;  
    
    p, ul {
      width: 70%;
      }

    p + img {
      width: 100%;
    }  

    a {
      color: ${black};
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }

      :focus {
        outline: 4px solid ${complimentary};
      }
    }

  }

  .nav-button-container {
    display: inline;
  }

  img {
    max-width: 100%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

import styled from 'styled-components';
import helpers from '@bbc/telescope-kit-helpers';
import { ghostGrey, complimentary } from '@bbc/telescope-kit-helpers/lib/colours';
const {
  white,
  black,
  charcoalGrey,
  slateGrey,
  keyLineGrey,
  primary,
} = helpers.colours;

export const PageContainer = styled.div`

  margin-top: 55px;

  section {
    padding: 14px 0 !important;
    font-size: 14px;
    line-height: 22px;  
    
    p {
      width: 70%;
      }

    p img {
      width: 130%;
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
      }
`
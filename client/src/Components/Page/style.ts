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
    width: 70%;

    font-size: 14px;
    line-height: 22px;

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


  @media (max-width: 767px) {
          width: 100%;
        }
      }
`
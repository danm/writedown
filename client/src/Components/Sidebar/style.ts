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

export const SidebarContent = styled.div`

  span {
    padding-top: 36px;
    display: block;
  }

  ul{
    list-style-type: none;
    margin: 8px 0;
    padding: 0;
   
    li {
      display: block;
      margin-right: 4px;
      line-height: 1.6;
    }

  }

  a{
    color: ${black};
    font-weight: bold;
    text-decoration: none;
    :hover {
      text-decoration: underline
      }
  }

  @media (max-width: 767px) {
          width: 100%;
          display: block;
        }
      }
`
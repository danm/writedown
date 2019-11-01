import styled from 'styled-components';
import helpers from '@bbc/telescope-kit-helpers';
import { downarrow } from '@bbc/telescope-kit-icons';
import { ghostGrey, complimentary } from '@bbc/telescope-kit-helpers/lib/colours';
const {
  white,
  black,
  charcoalGrey,
  slateGrey,
  keyLineGrey,
  primary,
} = helpers.colours;

export const Link = styled.a`
  text-decoration: none;
`;

export const Arrow = styled.div`
  height: 16px;
  width: 13px;
  background-color: ${white};
  -webkit-mask: url(${downarrow}) no-repeat 100% 100%;
  mask: url(${downarrow}) no-repeat 100% 100%;
  -webkit-mask-size: contain;
  mask-size: contain;
  display: inline-block;
  background-repeat: no-repeat;
`;

export const NavButton = styled.div`
  width: 195px;
  height: ${({ text }: { text: string }) => (text.length <= 15 ? '65px' : text.length >= 30 ? '105px' : '85px')};
  background-color: #1f1c1f;
  position: relative;
  box-sizing: border-box;
  padding-left: 26px;

  &.nav-button-next {
    padding-left: 0;
    padding-right: 26px;

      :after {
        content: '>';
        font-weight: bold;
        font-size: 22px;
        display: block;
        color: ${white};
        position: absolute;
        left: auto;
        right: 12px;
        top: 50%;
        margin-top: -11px;  
      }
  }

  :after {
    content: '<';
    font-weight: bold;
    font-size: 22px;
    display: block;
    color: ${white};
    position: absolute;
    left: 12px;
    top: 50%;
    margin-top: -11px;
  }
  

  .large {
    width: 165px;
    padding: 4px 20px 0;
  }

  .small {
    width: 30px;

    div {
      margin: ${(props) => (props.text.length <= 15
    ? '25px 15px 0'
    : props.text.length >= 30
      ? '45px 15px 0'
      : '35px 15px 0')};
    }

    &.right {
      float: right;

        div {
          margin: ${(props) => (props.text.length <= 15
      ? '25px 0 15px'
      : props.text.length >= 30
        ? '45px 0 15px'
        : '35px 0 15px')};
        }
    }
  }

  .title {
    font-size: 15px;
    font-weight: normal;
    letter-spacing: 0px;
    color: ${white};
    line-height: 30px;
  }

  .text {
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0px;
    color: ${white};
    line-height: 20px;
  }

  &:hover {
    background-color: ${slateGrey};

    .text {
      color: ${white};
    }
  }
`;

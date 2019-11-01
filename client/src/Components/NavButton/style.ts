import styled from 'styled-components';
import helpers from '@bbc/telescope-kit-helpers';
import { downarrow } from '@bbc/telescope-kit-icons';

const {
  white,
  slateGrey,
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
  min-height: 105px;
  height: ${({ text }: { text: string }) => {
    if (text.length <= 15) return '65px';
    if (text.length >= 30) return '105px';
    return '85px';
  }};
  background-color: #1f1c1f;
  position: relative;
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
      margin: ${({ text }: { text: string }) => {
    if (text.length <= 15) return '25px 15px 0';
    if (text.length >= 30) return '45px 15px 0';
    return '35px 15px 0';
  }}
    }

    &.right {
      float: right;

      div {
        margin: ${({ text }: { text: string }) => {
    if (text.length <= 15) return '25px 0 15px';
    if (text.length >= 30) return '45px 0 15px';
    return '35px 0 15px';
  }}}
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

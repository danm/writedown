import styled from 'styled-components';

export const Link = styled.a`
  &:hover {
    text-decoration: none;
  }
`;

export const Arrow = styled.div`
  height: 16px;
  width: 13px;
  position: relative;
  background-color: #fff;
  -webkit-mask: url(${({ icon }:{icon: string}) => icon}) no-repeat 100% 100%;
  mask: url(${(props) => props.icon}) no-repeat 100% 100%;
  -webkit-mask-size: contain;
  mask-size: contain;
  display: inline-block;
  background-repeat: no-repeat;
`;

export const NavButton = styled.div`
  width: 195px;
  height: ${({ text }: { text: string }) => (text.length <= 15 ? '65px' : text.length >= 30 ? '105px' : '85px')};
  background-color: #1f1c1f;

  .large {
    float: left;
    width: 165px;
    padding: 4px 20px 0;
  }

  .small {
    width: 30px;
    float: left;

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
    color: #fff;
    line-height: 30px;
  }

  .text {
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0px;
    color: #fff;
    line-height: 20px;
  }

  &:hover {
    background-color: #635c66;

    .text {
      color: #fff;
    }
  }
`;

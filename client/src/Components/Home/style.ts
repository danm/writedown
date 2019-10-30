import styled from 'styled-components';
import helpers from '@bbc/telescope-kit-helpers';
const {
  white,
  black,
  keyLineGrey,
} = helpers.colours;

export const Masthead = styled.div`
  height: auto;
  width: 100%;
  margin-top: -10px;
  color: white;
  padding: 10px 0 10px;

  .row{
    display: flex;

    @media (max-width: 767px) {
      flex-direction: column;
    }

    .col-sm-2 {width: 16.6%}
    .col-sm-3 {width: 25%}

    .col-sm-2, .col-sm-3, .col-sm-7{
      @media (max-width: 767px) {
        width: 100%;
      }     
    }

  }

  h1 {
    font-weight: bold;
    color: ${black};
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.3px;
    font-size: 44px;
    line-height: 55px;
    display: block;
  }

  .btn-container {
    padding-right: 8px;
    padding-top: 68px;

    div {
      position: relative;
      height: 54px;
      width: 242px;
      padding: 18px 13px;
      background-color: #bb1919;
      border: none;
      color: #fff;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
      white-space: nowrap;
      float: right;

      &:hover {
        background-color: #8b1717;
      }

      &:before {
        background-color: #fff;
        margin-left: 20px;
      }
    }
  }
`;

export const Blurb = styled.p`
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0;
  color: #1f1c1f;
  margin: 0;
  width: 91%;
  padding-top: 45px;
`;

export const MainContent = styled.div`
  background-color: #edecee;
  height: 100%;
  width: 100%;
`;

export const Heading = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  color: #333333;
  padding: 62px 0 30px;
`;

export const SpacerBottom = styled.div`
  margin: 32px 0 60px;
`;

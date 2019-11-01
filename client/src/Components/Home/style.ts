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

export const Row = styled.div`
    display: flex;
    justify-content: flex-start;

    &.big-margins {
      margin: 85px 0;
    }

    /** cols */
    > div {
      margin-left: 16px;
      box-sizing: border-box;
      flex-grow: 1;
      flex-shrink: 1;
      flex-basis: 0;

      &.col-card-link{
        flex-basis: 25%;
        flex-grow: 0;
        flex-shrink:0;
      }

      &.nav-button-container{
        display: block;
        width: 100%;
        position: relative;
      }

      :first-of-type {
        margin-left: 0;
      }

      .nav-button-wrapper-left {

      }
    }

    @media (max-width: 767px) {
      flex-direction: column;

      > div {
        margin: 0 0 16px 0;
      }
    }

    .col-sm-2 {flex-basis: 16.6%}
    .col-sm-3 {flex-basis: 25%}
    .col-sm-7 {flex-basis: 58.3%}


    .col-sm-2, .col-sm-3, .col-sm-7{
      @media (max-width: 767px) {
        width: 100%;
        margin-left: 0;
      }     
    }

`

export const Container = styled.div`
  width: 100%;
  max-width: 1248px;
  padding: 8px 16px 32px 16px;
  margin: 0 auto;
  box-sizing: border-box;

  .sidebar-title {
    font-weight: bold;
    color: ${black};
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.3px;
    font-size: 32px;
    line-height: 40px;
    display: block;
    max-width: 250px;
  }

  @media (max-width: 767px) {
          width: 100%;
          display: block;
        }
      }
`

export const Masthead = styled.div`
  height: auto;
  width: 100%;
  margin-top: -10px;
  color: white;
  padding: 10px 0;

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

  .col-centre{
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
            width: 100%;
            display: block;
          }
      }

  .gel-button {
    background-color: ${white};
    color: ${black};
    font-size: 13px;
    white-space: pre-wrap;
    height: auto;
    box-sizing: border-box;
    font-weight: bold;
    min-width: auto;
    width: auto;
    position: relative;
    padding: 8px 16px 8px 8px;

    :hover:after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: ${black};
    }

    .icon{
      display: inline-block;
      background-color: ${black};
      margin: 0 8px 0 0;
      height: 14px;
      width: 14px;
      position: relative;
      top: 2px;
    }
  }
`;

export const Blurb = styled.p`
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0;
  color: ${black};
`;

export const MainContent = styled.div`
  background-color: ${ghostGrey};
  height: 100%;
  width: 100%;

  .row {
    justify-content: flex-start !important;
  }

  .homepage-card-link{
    text-decoration: none;
    box-sizing: border-box;
    padding: 16px;
    background-color: ${white};
    color: ${black};
    width: 100%;
    max-width: 300px;
    height: 106px;
    white-space: pre-wrap;
    text-align: left;
    font-size: 22px;
    font-weight: bold;
    display: flex;
    vertical-align: text-top;
    line-height: 22px;
    margin-bottom: 16px;
    
    :hover {
      background-color: ${slateGrey};
      color: ${white};
    }

    :focus {
      outline: 4px solid ${complimentary}
    }
  }
`;

export const Heading = styled.div`
  font-size: 32px;
  font-weight: bold;
  line-height: 40px;
  color: ${black};
  padding: 62px 0 30px;
`;

export const SpacerBottom = styled.div`
  margin: 32px 0 60px;
`;

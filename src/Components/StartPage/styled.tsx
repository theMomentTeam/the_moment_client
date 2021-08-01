import styled, { keyframes } from "styled-components";
import device from "Constants/reactive";

export const StartPage = styled.div`
  display: flex;
`;

export const LeftBox = styled.div`
  margin: 24vh 9vw 0 7.5vw;
  @media ${device.tablet} {
    padding: 24px;
    margin: 48px auto;
  }
  @media ${device.mobile} {
    width: 100vw;
    margin: 0;
  }
`;

export const StartHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25.5vh;
  color: #434c9c;
`;

export const Logo = styled.div`
  @media ${device.mobile} {
    margin: 0 auto;
    margin-top: 100px;
  }
  svg {
    width: 346px;
    height: 80px;
    @media ${device.laptop} {
      max-width: 300px;
    }
    @media ${device.mobile} {
      width: 180px;
      margin: 0 auto;
    }
  }
`;

export const H1 = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin: 28px 0 13px;
  @media ${device.mobile} {
    display: none;
  }
`;

export const H2 = styled.div`
  font-weight: 400;
  font-size: 20px;
  @media ${device.mobile} {
    display: none;
  }
`;

export const ButtonBox = styled.div`
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
  button {
    width: 190px;
    padding: 20px 0;
    background-color: #434c9c;
    color: #ffffff;
    border-radius: 12px;
    outline: 0;
    border: 0;
    font-weight: 600;
    font-size: 24px;
    margin-right: 23px;
    @media ${device.tablet} {
      width: 100%;
      margin: 0;
      margin-top: 12px;
      padding: 24px 0;
    }
    @media ${device.mobile} {
      padding: 12px 0;
      font-weight: 600;
      font-size: 17px;
      margin-bottom: 0;
      width: 100%;
      margin-right: 0;
    }
  }
`;

export const RightBox = styled.div`
  overflow: hidden;
  height: 100vh;
`;

const slide = keyframes`
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: -800px;
  }
`;

export const ImgBox = styled.div`
  @media only screen and (max-width: 1200px) {
    display: none;
  }
  & svg:nth-child(1) {
    animation: ${slide} 10s infinite linear alternate;
  }
  & svg:nth-child(2) {
    animation: ${slide} 10s infinite linear alternate-reverse;
  }
  & svg:nth-child(3) {
    animation: ${slide} 10s infinite linear alternate;
  }
  svg {
    display: block;
    float: right;
    margin-right: 30px;
  }
`;

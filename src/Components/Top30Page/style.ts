import styled from "styled-components";
import device from "Constants/reactive";

export const TopTenWrapper = styled.section`
  display: flex;
  width: 70vw;
  margin: 180px auto;
  height: fit-content;
  @media ${device.mobile} {
    flex-direction: column;
    width: 90vw;
  }
`;

export const RightBox = styled.section`
  width: 54.2%;
  height: fit-content;
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const TenIssues = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: calc(100% - 40px);
  height: fit-content;
  border-radius: 12px;
  background: #e7f2f1;
  padding: 20px;
  word-break: break-all;
  & + div {
    margin-top: 23px;
  }
  @media ${device.laptop} {
    flex-direction: column;
  }
  &:nth-child(-n + 3) {
    background: #dce8f7;
  }
  & > span:nth-child(1) > span {
    margin-right: 20px;
    color: #6b7187;
    font-weight: 700;
  }
  & > span:nth-child(1) > article {
    float: right;
    width: 18vw;
    @media ${device.laptop} {
      width: 28vw;
    }
    @media ${device.mobile} {
      width: 70vw;
    }
    @media (max-width: 470px) {
      width: 62vw;
    }
    height: fit-content;
    color: #3b3e57;
    font-weight: 700;
  }
  & > span:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    @media ${device.laptop} {
      align-self: flex-end;
      margin-top: 10px;
    }
  }
  & > span:nth-child(2) > button:nth-child(1) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #92929223;
    width: 81px;
    height: 30px;
    color: white;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: -1px;
    text-align: left;
    & + button {
      margin-left: 54px;
      @media ${device.mobile} {
        margin-left: 20%;
      }
    }
  }
  ${device.mobile} {
    margin-top: 23px;
  }
`;

export const LinkCommentPageBtn = styled.button`
  margin-top: 50px;
  background-color: #434c9c;
  color: white;
`;

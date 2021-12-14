import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  margin-top: 100px;
  @media (max-width: 678px) {
    margin-top: 50px;
  }
`;

export const SlideImageContent = styled.div`
  max-height: 580px;
  @media (max-width: 773px) {
    max-height: 75vw;
  }
  overflow: hidden;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  color: white;
  top: 0;
  display: flex;
  align-items: center;
`;

export const TextSubContent = styled.div`
  padding: 0 7.5%;
`;

export const TextOne = styled.div`
  font-size: 60px;
  line-height: 60px;
  @media (max-width: 678px) {
    font-size: 36px;
    line-height: 36px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

export const TextTwo = styled.div`
  font-size: 30px;
  line-height: 30px;
  margin: 2rem 0;
  @media (max-width: 678px) {
    font-size: 18px;
    line-height: 18px;
    margin: 1rem 0;
  }
  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 12px;
    margin: 1rem 0;
  }
`;

export const TextThree = styled.div`
  font-size: 18px;
  line-height: 24px;
  @media (max-width: 678px) {
    font-size: 14px;
    line-height: 14px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 10px;
  }
`;

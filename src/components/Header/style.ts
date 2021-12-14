import styled from "styled-components";

export const Content = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  @media (max-width: 678px) {
    height: 50px;
  }
  display: flex;
  align-items: center;
  padding: 0 7.5%;
  @media (max-width: 480px) {
    padding: 0 2.5%;
  }
`;

export const LogoImage = styled.img`
  width: 196px;
  @media (max-width: 480px) {
    width: 98px;
  }
`;

export const LeftSubContent = styled.div`
  width: 33%;
`;

export const RightSubContent = styled.div`
  width: 33%;
  justify-content: end;
  display: flex;
`;

export const LogoText = styled.div`
  font-size: 11px;
  text-transform: uppercase;
  padding: 0 10px;
`;

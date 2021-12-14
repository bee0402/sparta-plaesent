import styled from "styled-components";

export const Content = styled.div`
  margin: 3.75%;
`;

export const CardContent = styled.div`
  text-align: start;
  width: -webkit-fill-available;
  padding: 8.75%;
`;

export const CardImage = styled.img`
  display: flex;
  width: 100%;
`;

export const CardDate = styled.div`
  font-size: 11px;
  color: #767676;
  padding-top: 3vw;
`;

export const CardTitle = styled.div`
  font-size: 48px;
  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 678px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  color: #131313;
  padding: 1vw 0;
`;

export const CardAuthor = styled.div`
  font-size: 14px;
  color: #131313;
`;

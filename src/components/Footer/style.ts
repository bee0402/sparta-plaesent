import styled from "styled-components";

export const Content = styled.div`
  width: 33%;
  @media (max-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 678px) {
    width: 100%;
  }
  margin: auto;
  text-align: center;
  padding: 0 3.75%;
`;

export const FooterTitle = styled.div`
  font-size: 18px;
`;

export const FooterForm = styled.div`
  display: flex;
  padding: 20px 0 50px 0;
`;

export const FooterInput = styled.input`
  height: 37px;
  width: 72.4%;
  font-size: 14px;
  border: 1px solid #000;
  :focus {
    outline: none;
  }
  padding: 0 10px;
`;

export const FooterSubmit = styled.button`
  width: 27.6%;
  height: 37px;
  background: #000;
  color: #ffffff;
  border: 1px solid #000;
  text-transform: uppercase;
  :focus {
    outline: none;
  }
`;

export const FooterCopyright = styled.div`
  font-size: 11px;
`;

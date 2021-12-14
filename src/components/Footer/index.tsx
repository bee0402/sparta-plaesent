import {
  Content,
  FooterForm,
  FooterTitle,
  FooterInput,
  FooterSubmit,
  FooterCopyright,
} from "./style";

const Footer = () => {
  return (
    <Content>
      <FooterTitle>Sign up for our Newsletter</FooterTitle>
      <FooterForm>
        <FooterInput type="email" placeholder="Email" />
        <FooterSubmit>Submit</FooterSubmit>
      </FooterForm>
      <FooterCopyright>
        © 2021 — SPARTA PLAESENT - instagram - facebook - twitter
      </FooterCopyright>
    </Content>
  );
};

export default Footer;

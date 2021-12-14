import React, { useState } from "react";
import {
  Content,
  FooterForm,
  FooterTitle,
  FooterInput,
  FooterSubmit,
  FooterCopyright,
} from "./style";

interface IProps {
  onChangeEmail: (email: string) => void;
}

const Footer = ({ onChangeEmail }: IProps) => {
  const [email, setEmail] = useState("");
  const [isValidate, setValidate] = useState(true);

  const onChange = (value: string) => {
    setValidate(true);
    setEmail(value);
  };

  const onSubmit = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const validate = reg.test(email);
    setValidate(validate);

    if (validate) {
      onChangeEmail(email);
    }
  };

  return (
    <Content>
      <FooterTitle>Sign up for our Newsletter</FooterTitle>
      <FooterForm>
        <FooterInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(e.target.value)}
          color={isValidate ? "#fff" : "#FF0000"}
        />
        <FooterSubmit onClick={onSubmit}>Submit</FooterSubmit>
      </FooterForm>
      <FooterCopyright>
        © 2021 — SPARTA PLAESENT - instagram - facebook - twitter
      </FooterCopyright>
    </Content>
  );
};

export default Footer;

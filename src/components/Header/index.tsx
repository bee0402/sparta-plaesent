import React from "react";
import {
  Content,
  LeftSubContent,
  RightSubContent,
  LogoImage,
  ListImage,
  LogoText,
} from "./style";
import logo from "assets/images/Logo.png";
import list from "assets/images/List.png";

const Header = () => {
  return (
    <Content>
      <LeftSubContent>
        <LogoImage src={logo} alt="responsive" loading="lazy" />
      </LeftSubContent>
      <RightSubContent />
      <RightSubContent>
        <LogoText>212.555.5555</LogoText>
        <LogoText>Login</LogoText>
        <LogoText>
          <ListImage src={list} width={20} alt="responsive" />
        </LogoText>
      </RightSubContent>
    </Content>
  );
};

export default Header;

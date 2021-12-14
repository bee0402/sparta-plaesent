import {
  Content,
  LeftSubContent,
  RightSubContent,
  LogoImage,
  LogoText,
} from "./style";
import { LOGO_IMAGE, LIST_IMAGE } from "utils/constants";

const Header = () => {
  return (
    <Content>
      <LeftSubContent>
        <LogoImage src={LOGO_IMAGE} alt="logo" />
      </LeftSubContent>
      <RightSubContent />
      <RightSubContent>
        <LogoText>212.555.5555</LogoText>
        <LogoText>Login</LogoText>
        <LogoText>
          <img src={LIST_IMAGE} width={20} alt="list" />
        </LogoText>
      </RightSubContent>
    </Content>
  );
};

export default Header;

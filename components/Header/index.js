import React from "react";
import {
  HamburgerLine,
  HamburgerWrapper,
  HeaderLeftContainer,
  HeaderRightContainer,
  HeaderWrapper,
} from "./styled";
import Text from "../Text";
import { theme } from "../../assets/theme";
import Button from "../Button";

const HamburgerButton = ({ onClick }) => {
  return (
    <HamburgerWrapper onClick={onClick}>
      <HamburgerLine />
      <HamburgerLine />
    </HamburgerWrapper>
  );
};

function Header({ navigationHandler }) {
  return (
    <HeaderWrapper
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <HeaderLeftContainer>
        <Text text={"LOGO"} color={theme.colors.secondary} />
      </HeaderLeftContainer>
      <HeaderRightContainer>
        <Button buttonText="Let's talk" />
        <HamburgerButton onClick={navigationHandler} />
      </HeaderRightContainer>
    </HeaderWrapper>
  );
}

export default Header;

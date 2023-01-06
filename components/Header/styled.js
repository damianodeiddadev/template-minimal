import { motion } from "framer-motion";
import styled from "styled-components";
import { horizontalPadding } from "../../assets/mixins";
import { theme } from "../../assets/theme";

export const HeaderWrapper = styled(motion.div)`
  display: flex;
  background-color: none;
  min-height: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem ${horizontalPadding} 0;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25px;
  width: 50px;
  margin-left: 2rem;
  padding: 5px 0;
  cursor: pointer;

  :hover {
    animation: moveLines 700ms 300ms;
    animation-iteration-count: 1;
  }

  @keyframes moveLines {
    0% {
      height: 25px;
    }
    50% {
      height: 5px;
    }
    100% {
      height: 25px;
    }
  }
`;

export const HamburgerLine = styled.span`
  background-color: ${theme.colors.black};
  padding: 1px 0;
`;

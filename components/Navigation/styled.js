import { motion } from "framer-motion";
import styled from "styled-components";
import { headerHeight, horizontalPadding } from "../../assets/mixins";
import { theme } from "../../assets/theme";

export const NavigationWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.black};
  z-index: 99;
`;

export const NavigationHeader = styled.div`
  display: flex;
  background-color: none;
  min-height: 3rem;
  justify-content: space-between;
  align-items: center;
  padding: 1rem ${horizontalPadding} 0;
`;

export const NavigationContainer = styled.div`
  display: flex;
  padding: 0 calc(${horizontalPadding} * 4);
  width: 100%;
  height: 100%;
  justify-content: space-around;
`;

export const NavigationSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - ${headerHeight});
  padding: 10rem 3rem;
`;

export const NavigationLink = styled(motion.div)`
  padding-bottom: 2rem;
  font-size: 2.5rem;
  text-transform: uppercase;

  :hover {
    opacity: 0.5;
  }
`;

export const HamburgerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 25px;
  width: 50px;
  margin-left: 2rem;
  padding: 5px 0;
  cursor: pointer;
`;

export const HamburgerLine = styled.span`
  background-color: ${theme.colors.white};
  padding: 1px 0;
`;

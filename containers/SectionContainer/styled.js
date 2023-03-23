import styled from "styled-components";
import { theme } from "../../assets/theme";
import {
  headerHeight,
  horizontalPadding,
  verticalPadding,
} from "../../assets/mixins";
import { motion } from "framer-motion";

export const StyledSection = styled(motion.div)`
  min-height: calc(100vh - ${headerHeight});
  background-color: ${theme.black};
  padding: ${verticalPadding} ${horizontalPadding};
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

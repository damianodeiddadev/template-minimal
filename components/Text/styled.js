import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledText = styled(motion.p)`
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  text-transform: ${(props) => props.textTransform};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  max-width: ${(props) => props.maxWidth};
`;

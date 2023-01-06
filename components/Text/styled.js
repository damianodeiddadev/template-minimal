import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledText = styled(motion.p)`
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  text-transform: "";
  color: ${(props) => props.color};
  margin: 0;
`;

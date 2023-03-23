import React from "react";
import { StyledText } from "./styled";

function Text({
  text,
  color,
  fontSize,
  onClick,
  variants,
  animate,
  margin,
  maxWidth,
  textTransform,
}) {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      margin={margin}
      onClick={onClick}
      variants={variants}
      animate={animate}
      maxWidth={maxWidth}
      textTransform={textTransform}
    >
      {text || "inserire testo"}
    </StyledText>
  );
}

export default Text;

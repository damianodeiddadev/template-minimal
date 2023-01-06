import React from "react";
import { StyledText } from "./styled";

function Text({ text, color, fontSize, onClick, variants }) {
  return (
    <StyledText
      color={color}
      fontSize={fontSize}
      onClick={onClick}
      variants={variants}
    >
      {text || "inserire testo"}
    </StyledText>
  );
}

export default Text;

import Link from "next/link";
import React from "react";
import { StyledButton } from "./styled";

function Button({ href, buttonText }) {
  return (
    <Link href={href || ""}>
      <StyledButton> {buttonText} </StyledButton>
    </Link>
  );
}

export default Button;

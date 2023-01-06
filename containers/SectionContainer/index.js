import React from "react";
import { StyledSection } from "./styled";

function SectionContainer({
  alignItems,
  justifyContent,
  flexDirection,
  children,
  variants,
  initial,
  animate,
}) {
  return (
    <StyledSection
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      variants={variants}
      initial={initial}
      animate={animate}
    >
      {children}
    </StyledSection>
  );
}

export default SectionContainer;

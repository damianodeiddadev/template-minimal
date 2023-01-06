import React from "react";
import Image from "next/image";
import { StyledImageContainer } from "./styled";

function ImageContainer({ src, width, height, alt }) {
  return (
    <StyledImageContainer>
      <Image src={src} width={width} height={height} alt={alt} />
    </StyledImageContainer>
  );
}

export default ImageContainer;

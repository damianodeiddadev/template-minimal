import React, { useState } from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import { StyledPage } from "./styled";

function PageContainer({ children }) {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  const navigationHandler = () => {
    setIsNavigationOpen(!isNavigationOpen);
  };
  return (
    <StyledPage>
      <Header navigationHandler={navigationHandler} />
      <Navigation
        isNavigationOpen={isNavigationOpen}
        navigationHandler={navigationHandler}
      />
      {children}
    </StyledPage>
  );
}

export default PageContainer;

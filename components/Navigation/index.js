import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { theme } from "../../assets/theme";
import Text from "../Text";
import {
  HamburgerLine,
  HamburgerWrapper,
  NavigationContainer,
  NavigationHeader,
  NavigationLink,
  NavigationSection,
  NavigationWrapper,
} from "./styled";
import example from "../../assets/images/example.jpg";
import ImageContainer from "../Image";

const HamburgerButton = ({ onClick }) => {
  return (
    <HamburgerWrapper onClick={onClick}>
      <HamburgerLine />
    </HamburgerWrapper>
  );
};

function Navigation({ isNavigationOpen, navigationHandler }) {
  const navLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
  ];

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 1,
        ease: [0.5, 0.5, 0.0, 0.9],
      },
    },
  };

  const item = {
    hidden: { y: 40, skewX: -15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      skewX: 0,
    },
  };
  return (
    <AnimatePresence>
      {isNavigationOpen && (
        <NavigationWrapper
          animate={{ opacity: 1 }}
          initial={{ opacity: 0.5 }}
          transition={{
            duration: 0.3,
            ease: [0.6, 0.8, 0.0, 0.9],
          }}
          exit={{ opacity: 0 }}
        >
          <NavigationHeader>
            <Text text={"LOGO"} color={theme.colors.secondary} />
            <HamburgerButton onClick={navigationHandler} />
          </NavigationHeader>
          <NavigationContainer>
            <NavigationSection>
              <ImageContainer
                src={example}
                width={500}
                height={400}
                alt="example image"
              />
            </NavigationSection>
            <NavigationSection
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((element, i) => {
                return (
                  <Link href={element.link} key={i}>
                    <NavigationLink variants={item}>
                      {element.label}
                    </NavigationLink>
                  </Link>
                );
              })}
            </NavigationSection>
          </NavigationContainer>
        </NavigationWrapper>
      )}
    </AnimatePresence>
  );
}

export default Navigation;

import React from "react";
import HomePageHeroSection from "../home/HomePageHeroSection";
import Navbar from "./navbar";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HomePageHeroSection>{children}</HomePageHeroSection>
      <Navbar />
    </>
  );
};

export default Header;

import React from "react";
import HomePageHeroSection from "../home/HomePageHeroSection";
import Navbar from "./navbar";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <HomePageHeroSection>{children}</HomePageHeroSection>
    </>
  );
};

export default Header;

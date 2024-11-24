"use client";

import MapSection from "../component/community/Mapsection";
import SocialHub from "../component/community/SocialHub";
import Footer from "../component/UI/footer";
import TribeSection from "../component/community/TribeSection";
import Navbar from "../component/UI/navbar";
import NewHeroSection from "../component/UI/NewHeroSection";

const Community = () => {
  return (
    <div className="w-full">
      <Navbar />
      <NewHeroSection
        buttonLabel="Bring PeerHub to Your Campus"
        description="PeerHub Communities bring students together to explore shared interests, exchange ideas, and grow through collaboration. Whether you're passionate about tech, design, startups, or research, our vibrant communities provide a platform to network, learn, and innovate. Join us to build lasting connections, work on exciting projects, and shape the future together!"
        image="/home/homePageCommunity.svg"
        title="A Community of Doers and Dreamers."
      />
      <MapSection />
      <TribeSection />
      <SocialHub />
      <Footer />
    </div>
  );
};

export default Community;

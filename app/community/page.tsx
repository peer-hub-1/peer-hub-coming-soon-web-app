"use client";

import MapSection from "../component/community/Mapsection";
import SocialHub from "../component/community/SocialHub";
import Header from "../component/UI/Header";
import Footer from "../component/UI/footer";
import TribeSection from "../component/community/TribeSection";

const Community = () => {
  return (
    <div className="w-full">
      <Header>
        <h1 className="md:text-7xl sm:text-5xl text-3xl  text-peerHubOrange font-Berlin">
          PeerHub<span className="text-white">'s</span>{" "}
          <span className="text-white">Community</span>
        </h1>
        <button className="text-peerHubOrange  border border-peerHubOrange rounded-3xl px-4 py-2 mt-8">
          Bring PeerHub to Your Campus
        </button>
      </Header>
      <MapSection />
      <TribeSection />
      <SocialHub />
      <Footer />
    </div>
  );
};

export default Community;

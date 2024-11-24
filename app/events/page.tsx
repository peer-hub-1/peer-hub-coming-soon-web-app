"use client";
import Header from "../component/UI/Header";
import NewHeroSection from "../component/UI/NewHeroSection";
import Footer from "../component/UI/footer";
import Navbar from "../component/UI/navbar";
import OfflineEvent from "../component/event/OfflineEvent";
import OnlineEventGrid from "../component/event/OnlineEventGrid";

const Event = () => {
  return (
    <div className="w-full">
      <Navbar />
      <NewHeroSection
        buttonLabel="Register Now"
        description="PeerHub Events bring students together through dynamic online and offline experiences. From interactive webinars, hackathons, and bootcamps online to vibrant offline fests, designathons, open mics, and industry conclaves, our events are designed to spark creativity and foster growth. Whether you're learning from experts, showcasing your talents, or building connections, PeerHub Events offer opportunities to grow, collaborate, and leave your mark. Join us to be part of something extraordinary!"
        image="/home/homePageEvents.svg"
        title="Events so lit, Your future self thanks you!"
      />
      <OfflineEvent />
      <OnlineEventGrid />
      <Footer />
    </div>
  );
};

export default Event;

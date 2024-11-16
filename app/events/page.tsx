"use client";
import Header from "../component/UI/Header";
import Footer from "../component/UI/footer";
import OfflineEvent from "../component/event/OfflineEvent";
import OnlineEventGrid from "../component/event/OnlineEventGrid";

const Event = () => {
  return (
    <div className="w-full">
      <Header>
        <h1 className="md:text-7xl sm:text-5xl text-3xl  text-peerHubOrange font-Berlin">
          PeerHub<span className="text-white">'s</span>{" "}
          <span className="text-white">Lively Events</span>
        </h1>
        <button className="text-peerHubOrange  border border-peerHubOrange rounded-3xl px-4 py-2 mt-8">
          Read More
        </button>
      </Header>
      <OfflineEvent />
      <OnlineEventGrid />
      <Footer />
    </div>
  );
};

export default Event;

"use client";
import Header from "../component/UI/Header";
import Footer from "../component/UI/footer";
import FellowshipProgram from "../component/knowledge vault/FellowshipProgram";
import FoundationLabs from "../component/knowledge vault/FoundationLabs";
import MicroLearning from "../component/knowledge vault/MicroLearning";

const KnowledgeVault = () => {
  return (
    <div className="w-full">
      <Header>
        <h1 className="md:text-7xl sm:text-5xl text-3xl  text-peerHubOrange font-Berlin text-center">
          <span className="text-white">Knowledge Vault @</span>PeerHub
        </h1>
        <button className="text-peerHubOrange  border border-peerHubOrange rounded-3xl px-4 py-2 mt-8">
          Get Explore
        </button>
      </Header>
      <MicroLearning />
      <FoundationLabs />
      <FellowshipProgram />
      <Footer />
    </div>
  );
};

export default KnowledgeVault;

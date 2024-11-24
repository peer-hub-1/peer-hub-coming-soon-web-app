"use client";
import Header from "../component/UI/Header";
import NewHeroSection from "../component/UI/NewHeroSection";
import Footer from "../component/UI/footer";
import Navbar from "../component/UI/navbar";
import FellowshipProgram from "../component/knowledge vault/FellowshipProgram";
import FoundationLabs from "../component/knowledge vault/FoundationLabs";
import MicroLearning from "../component/knowledge vault/MicroLearning";

const KnowledgeVault = () => {
  return (
    <div className="w-full">
      <Navbar />
      <NewHeroSection
        buttonLabel="Get Explore"
        description="The PeerHub Knowledge Vault is designed to take you on a transformative learning journey. From foundational skills to advanced industry insights, it equips you with everything you need to excel in your chosen career. Unlock your potential and achieve your breakthroughs!"
        image="/home/homePageKnowledgeVault.svg"
        title="Your One-Stop Resource Hub!"
      />
      <MicroLearning />
      <FoundationLabs />
      <FellowshipProgram />
      <Footer />
    </div>
  );
};

export default KnowledgeVault;

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/app/component/UI/footer";
import HorizontalScrollSections from "./component/home/HorizontalScrollSections";
import Header from "./component/UI/Header";

const communities = [
  { text: "PeerHub", lang: "en" },
  { text: "पीयरहब ", lang: "fr" },
  { text: "பீர்ஹப் ", lang: "es" },
  { text: "పీర్‌హబ్ ", lang: "ja" },
  { text: "পিয়ারহাব ", lang: "en" },
  { text: "ಪೀರ್‌ಹಬ್ ", lang: "ko" },
  { text: "പീർഹബ് ", lang: "de" },
  { text: "ਪੀਰਹਬ ", lang: "hi" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHomePage, setShowHomePage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < communities.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => setShowHomePage(true), 1000); // Wait 1 second before showing home page
      }
    }, 500); // Change word every 0.5 second

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="flex flex-col items-center justify-center min-w-full">
      <AnimatePresence mode="wait">
        {!showHomePage ? (
          <motion.div
            key="hello"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold font-Berlin absolute top-0 min-w-full h-screen flex items-center justify-center min-h-scree bg-navyBlue text-white"
          >
            {communities[currentIndex].text}
          </motion.div>
        ) : (
          <>
            <Header>
              <h1 className="md:text-[10rem] sm:text-8xl text-6xl  text-peerHubOrange font-Berlin">
                PeerHub
              </h1>
              <p className=" sm:text-xl md:text-3xl text-white text-center">
                This Hub is not banned !
              </p>
            </Header>
            <HorizontalScrollSections />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

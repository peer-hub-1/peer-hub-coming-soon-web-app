"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/app/component/UI/footer";
import Navbar from "@/app/component/UI/navbar";
import ScrollSections from "./component/home/scroll-animation";

const communities = [
  { text: "Community", lang: "en" },
  { text: "Communauté", lang: "fr" },
  { text: "Comunidad", lang: "es" },
  { text: "コミュニティ", lang: "ja" },
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
    }, 1000); // Change word every 1 second

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
            <Navbar />
            <motion.div
              key="homepage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              <ScrollSections />
            </motion.div>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

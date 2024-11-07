"use client";

import { useRef, useEffect, useState } from "react";
import community from "@/public/home/homePageCommunity.svg";
import homePageKnowledgeVault from "@/public/home/homePageKnowledgeVault.svg";
import homePageEvents from "@/public/home/homePageEvents.svg";
import Image from "next/image";

export default function ScrollSections() {
  const [visibleSection, setVisibleSection] = useState(0);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSection(index);
          }
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const sections = [
    // { title: "PeerHub", image: community },
    { title: "Community", image: community },
    { title: "Knowledge vault", image: homePageKnowledgeVault },
    { title: "Events", image: homePageEvents },
  ];

  return (
    <div className="h-full w-full snap-y snap-mandatory">
      {sections.map((section, index) => (
        <div
          key={index}
          ref={sectionRefs[index]}
          className={`h-screen w-full flex flex-col gap-4 items-center justify-center snap-start transition-opacity duration-500 text-white ${
            visibleSection === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* {index === 0 ? (
            <HomePageHeroSection />
          ) : ( */}
          <div className="flex flex-col gap-8 items-center p-4">
            <Image
              src={section.image}
              alt={section.title}
              className=""
              width={500}
              height={500}
            />
            <h2 className="text-6xl font-bold font-Berlin">{section.title}</h2>
            <button className="text-xl px-4 py-2 rounded-3xl bg-orange-500">
              Explore more
            </button>
          </div>
          {/* )} */}
        </div>
      ))}
    </div>
  );
}

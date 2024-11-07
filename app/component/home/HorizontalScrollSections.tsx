"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import community from "@/public/home/homePageCommunity.svg";
import homePageKnowledgeVault from "@/public/home/homePageKnowledgeVault.svg";
import homePageEvents from "@/public/home/homePageEvents.svg";
import Link from "next/link";
import classNames from "classnames";

export default function HorizontalScrollSections() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const changeSection = useCallback(
    (direction: 1 | -1) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveSection((prev) => {
        const next = prev + direction;
        return Math.max(0, Math.min(2, next));
      });
      setTimeout(() => setIsTransitioning(false), 500); // Match this with CSS transition duration
    },
    [isTransitioning]
  );

  const debouncedChangeSection = debounce(changeSection, 50);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleWheel = (e: WheelEvent) => {
      if (
        (e.deltaY > 0 && activeSection === 2) ||
        (e.deltaY < 0 && activeSection === 0)
      )
        return;
      e.preventDefault();
      if (e.deltaY > 0) {
        debouncedChangeSection(1);
      } else if (e.deltaY < 0) {
        debouncedChangeSection(-1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX - touchEndX;
      if (Math.abs(swipeDistance) > 100) {
        // Increased threshold for more deliberate swipes
        if (swipeDistance > 0) {
          changeSection(1);
        } else {
          changeSection(-1);
        }
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [changeSection, debouncedChangeSection]);

  const sections = [
    {
      title: "Community",
      image: community,
      active: true,
      location: "/community",
    },
    {
      title: "Knowledge vault",
      image: homePageKnowledgeVault,
      active: false,
      location: "/Knowledge_vault",
    },
    {
      title: "Events",
      image: homePageEvents,
      active: false,
      location: "/events",
    },
  ];

  return (
    <div ref={containerRef} className="overflow-hidden w-full h-screen">
      <div
        className="flex max-w-full  transition-transform duration-[1500ms] ease-in-out items-center"
        style={{ transform: `translateX(-${activeSection * 100}%)` }}
      >
        {sections.map((section) => (
          <div
            className="flex flex-col gap-8 items-center p-4 min-w-full text-white"
            key={section.title}
          >
            <Image
              src={section.image}
              alt={section.title}
              className="size-52 md:size-96"
              width={500}
              height={500}
            />
            <h2 className="text-6xl font-bold font-Berlin text-center">
              {section.title}
            </h2>
            <Link
              href={section.location}
              className={classNames(
                "text-xl px-4 py-2 rounded-3xl bg-orange-500",
                !section.active && "pointer-events-none"
              )}
            >
              Explore more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

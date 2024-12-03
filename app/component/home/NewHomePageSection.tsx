import React from "react";
import HighlightText from "../UI/HighlightText";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    titleLine: (
      <h1 className="md:text-6xl sm:text-4xl text-2xl  text-white font-Berlin">
        A <HighlightText text="Community" /> of Doers and Dreamers.
      </h1>
    ),
    description:
      "PeerHub Communities bring students together to explore shared interests, exchange ideas, and grow through collaboration. Whether you're passionate about tech, design, startups, or research, our vibrant communities provide a platform to network, learn, and innovate. Join us to build lasting connections, work on exciting projects, and shape the future together!",
    buttonLabel: "Learn More",
    image: "/home/homePageCommunity.svg",
    link: "/community",
  },
  {
    titleLine: (
      <h1 className="md:text-6xl sm:text-4xl text-2xl  text-white font-Berlin">
        Your One-Stop <HighlightText text="Resource" /> Hub!
      </h1>
    ),
    description:
      "The PeerHub Knowledge Vault is designed to take you on a transformative learning journey. From foundational skills to advanced industry insights, it equips you with everything you need to excel in your chosen career. Unlock your potential and achieve your breakthroughs!",
    buttonLabel: "Read More",
    image: "/home/homePageKnowledgeVault.svg",
    link: "/knowledge-vault",
  },
  {
    titleLine: (
      <h1 className="md:text-6xl sm:text-4xl text-2xl  text-white font-Berlin">
        <HighlightText text="Events" /> so lit, Your future self thanks you!
      </h1>
    ),
    description:
      "PeerHub Events bring students together through dynamic online and offline experiences. From interactive webinars, hackathons, and bootcamps online to vibrant offline fests, designathons, open mics, and industry conclaves, our events are designed to spark creativity and foster growth. Whether you're learning from experts, showcasing your talents, or building connections, PeerHub Events offer opportunities to grow, collaborate, and leave your mark. Join us to be part of something extraordinary!",
    buttonLabel: "About Us",
    image: "/home/homePageEvents.svg",
    link: "/events",
  },
];

const NewHomePageSection = () => {
  return (
    <div className="bg-navyBlue rounded-t-3xl flex flex-col gap-10 sm:gap-20 md:gap-40 p-8">
      {data?.map((item, index) => (
        <div
          key={index}
          className={`flex md:gap-36 gap-8 sm:gap-14 flex-col ${classNames(
            index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          )} items-center`}
        >
          <Image
            alt=""
            src={item.image}
            width={500}
            height={500}
            className="md:max-w-lg aspect-square max-w-56"
          />
          <div className="flex flex-col gap-5">
            {item.titleLine}
            <p className="text-white/80 font-Raleway md:text-xl md:my-8">
              {item.description}
            </p>
            <Link
              href={item.link}
              className="bg-peerHubOrange rounded-3xl px-4 py-1 text-base text-white w-fit md:mt-5"
            >
              {item.buttonLabel}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewHomePageSection;

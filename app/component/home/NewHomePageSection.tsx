import React from "react";
import HighlightText from "../UI/HighlightText";
import classNames from "classnames";
import Image from "next/image";

const data = [
  {
    titleLine: (
      <h1 className="md:text-6xl sm:text-4xl text-2xl  text-white font-Berlin">
        Our <HighlightText text="Community" /> Equitable access in STEM
        education
      </h1>
    ),
    description:
      "Learn the skills for emerging roles and future careers with Autodesk’s industry-validated learning content. Discover the content that's perfect for your learning journey or curriculum Join us to learn about the latest industry trends, connect with other members, showcase your work, and more!",
    buttonLabel: "Learn More",
    image: "/home/homePageCommunity.svg",
  },
  {
    titleLine: (
      <h1 className="md:text-6xl sm:text-4xl text-2xl  text-white font-Berlin">
        Careers <HighlightText text="Knowledge" />
        on Vault Our impact in action
      </h1>
    ),
    description:
      "Getting students ready for today’s industry needs with Haas and Autodesk Fusion curriculum. Revealing perspectives from Autodesk Learning project-based skills with cloud-based design and make technology.",
    buttonLabel: "Read More",
    image: "/home/homePageKnowledgeVault.svg",
  },
  {
    titleLine: (
      <h1 className="md:text-6xl sm:text-4xl text-2xl  text-white font-Berlin">
        Our <HighlightText text="Events" /> The skills of the future Equitable
        education
      </h1>
    ),
    description:
      "Learn the skills for emerging roles and future careers with Autodesk’s industry-validated learning content. Discover the content that's perfect for your learning journey or curriculum Join us to learn about the latest industry trends, connect with other members, showcase your work, and more!",
    buttonLabel: "About Us",
    image: "/home/homePageEvents.svg",
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
            <button className="bg-peerHubOrange rounded-3xl px-4 py-1 text-base text-white w-fit md:mt-5">
              {item.buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewHomePageSection;

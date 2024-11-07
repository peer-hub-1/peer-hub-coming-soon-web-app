import React from "react";
import Carousel from "../UI/Carousel";
import Image from "next/image";
import HighlightText from "../UI/HighlightText";

const carouselData = [
  { image: "/tribe/Tech Clubs.png", name: "Tech Clubs" },
  {
    image: "/tribe/Metro Clubs.png",
    name: "Metro Clubs",
  },
  {
    image: "/tribe/Law Clubs.png",
    name: "Law Clubs",
  },
  {
    image: "/tribe/Health Clubs.png",
    name: "Health Clubs",
  },
  {
    image: "/tribe/Art Clubs.png",
    name: "Art Clubs",
  },
  {
    image: "/tribe/StartUp Clubs.png",
    name: "StartUp Clubs",
  },
  {
    image: "/tribe/Management Clubs.png",
    name: "Management Clubs",
  },
];

const TribeSection = () => {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-2 text-center font-Berlin md:text-6xl text-white">
        Find your <HighlightText text="Tribe" />
      </h1>
      <Carousel>
        {carouselData.map((data) => (
          <div className="text-center text-white p-4" key={data.name}>
            <Image
              src={data.image}
              alt={data.name}
              className=" mx-auto"
              width={300}
              height={300}
            />
            <h3 className="text-3xl font-bold mt-4 font-Raleway">
              {data.name}
            </h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TribeSection;

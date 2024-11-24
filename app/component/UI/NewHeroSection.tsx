import React from "react";
import Image from "next/image";

function NewHeroSection({
  title,
  description,
  buttonLabel,
  image,
}: {
  title: string;
  description: string;
  buttonLabel: string;
  image: string;
}) {
  return (
    <div className="min-h-dvh w-full flex justify-center items-center bg-[#FBF8F6] p-8">
      <div
        className={`flex md:gap-36 gap-8 sm:gap-14 flex-col md:flex-row  items-center`}
      >
        <div className="flex flex-col gap-5">
          <h1 className="md:text-6xl sm:text-4xl text-2xl  text-navyBlue font-Berlin">
            {title}
          </h1>
          <p className="text-navyBlue/80 font-Raleway md:text-xl md:my-8">
            {description}
          </p>
          <button className="rounded-3xl px-4 py-1 text-base text-peerHubOrange border border-peerHubOrange w-fit md:mt-5">
            {buttonLabel}
          </button>
        </div>
        <div className="flex flex-col justify-end md:min-w-[200px] lg:min-w-[450px]">
          <Image
            src={image}
            alt=""
            width={472}
            height={472}
            className="object-cover rounded-2xl"
          />
          <div className="flex items-center relative">
            <Image
              src="/joinNow.png"
              alt=""
              width={180}
              height={180}
              className="absolute -left-20 pb-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewHeroSection;

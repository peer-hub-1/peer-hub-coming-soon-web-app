import React from "react";
import Image from "next/image";
import HighlightText from "../UI/HighlightText";
import Link from "next/link";

const SocialHub = () => {
  return (
    <div
      className="flex flex-col gap-4 p-4 justify-center md:my-8"
      id="socialHub"
    >
      <div className="flex justify-between mb-24">
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className=" border-white rounded-full relative top-16 left-2 pointer-events-none"
        >
          <Image
            src="/social hub/faceBook.png"
            alt=""
            className="size-11 md:size-24"
            width={90}
            height={90}
          />
        </Link>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className=" border-white rounded-full relative top-9 left-4 pointer-events-none"
        >
          <Image
            src="/social hub/X.png"
            alt=""
            className="size-11 md:size-24"
            width={90}
            height={90}
          />
        </Link>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className=" border-white rounded-full  relative left-2 pointer-events-none"
        >
          <Image
            src="/social hub/reddit.png"
            alt=""
            className="size-11 md:size-24"
            width={90}
            height={90}
          />
        </Link>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className=" border-white rounded-full relative top-11 right-4 pointer-events-none"
        >
          <Image
            src="/social hub/discord.png"
            alt=""
            className="size-11 md:size-24"
            width={90}
            height={90}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/company/peer-hub/"
          target="_blank"
          rel="noopener noreferrer"
          className=" border-white rounded-full relative top-7"
        >
          <Image
            src="/social hub/linkdin.png"
            alt=""
            className="size-11 md:size-24"
            width={90}
            height={90}
          />
        </Link>
      </div>
      <div className="flex gap-2 sm:gap-4 items-center">
        <Link
          href="https://www.instagram.com/peerhub101?igsh=MWxvZWhlMjkxNzk2MA=="
          target="_blank"
          rel="noopener noreferrer"
          className=" border-white rounded-full min-w-fit"
        >
          <Image
            src="/social hub/insta.png"
            alt=""
            className="size-11 md:size-24"
            width={90}
            height={90}
          />
        </Link>
        <h1 className="flex-grow  text-2xl sm:text-4xl md:text-6xl font-bold mb-2 font-Berlin text-white text-center">
          <HighlightText text="Social" /> Hub
        </h1>
        <Link
          href="https://youtube.com/@peerhub101?si=S_lWax7Ob3CUu-9j"
          target="_blank"
          rel="noopener noreferrer"
          className=" border-white rounded-full relative top-3 min-w-fit"
        >
          <Image
            src="/social hub/youTube.png"
            alt=""
            className="size-11 md:size-24"
            width={90}
            height={90}
          />
        </Link>
      </div>
      <p className="text-sm md:text-base text-center text-white font-Raleway">
        Join the conversation and stay in the loop! Follow PeerHub across all
        platforms for the latest updates, insights, and opportunities to connect
        with like-minded students.
      </p>
      <Link
        href="https://www.instagram.com/peerhub101?igsh=MWxvZWhlMjkxNzk2MA=="
        target="_blank"
        rel="noopener noreferrer"
        className="md:py-5 md:px-12 px-6 py-2 rounded-3xl mx-auto border border-whit w-fit hidden sm:block text-center text-white font-Raleway"
      >
        Join the Conversation
      </Link>
    </div>
  );
};

export default SocialHub;

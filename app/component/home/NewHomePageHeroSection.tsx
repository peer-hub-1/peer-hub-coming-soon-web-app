import Image from "next/image";
import Link from "next/link";

const NewHomePageHeroSection = () => {
  return (
    <div className="w-full relative flex flex-col justify-between font-Raleway">
      <Image
        src="/home/newHeroSectionBg.svg"
        alt=""
        fill
        className="object-contain"
      />
      <div className="flex justify-center items-center gap-4 md:gap-8 mt-8 md:mt-12 p-4 ">
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="text-3xl md:text-6xl font-medium font-Berlin text-primaryNavyBlue capitalize">
            From Side Hustle to Main Gig
          </h1>
          <p className="text-sm md:text-lg text-primaryNavyBlue">
            Welcome to PeerHub, the community-driven platform where students
            connect, collaborate, and create. Join our interest-based clubs on
            our exclusive app, share ideas, and get inspired by peers across
            colleges. Our diverse range of clubs, including Tech Clubs,
            Management Clubs, Metro Clubs, Health Clubs, Law Clubs, and Art
            Clubs, ensures that there’s a community for everyone.
          </p>
          <Link
            href="/community"
            className="bg-peerHubOrange rounded-3xl px-4 py-1 text-base text-white w-fit z-10"
          >
            Join the Community
          </Link>
        </div>
      </div>
      <div className="flex max-w-full relative justify-center">
        <Image
          alt=""
          className="aspect-[2.79]"
          src="/home/hero-image.svg"
          width={1179}
          height={423}
        />
      </div>
    </div>
  );
};

export default NewHomePageHeroSection;

import Image from "next/image";
import HighlightText from "../UI/HighlightText";
import Button from "../UI/Button";
import Link from "next/link";

export default function OnlineEventGrid() {
  const items = [
    {
      title: "Bright Creative Workspace",
      image: "/online event/grid1.jpg",
      span: "row-span-2",
      hight: 370,
    },
    {
      title: "Teamwork and Unity",
      image: "/online event/grid2.jpg",
      span: "row-span-3",
      hight: 480,
    },
    {
      title: "High-Tech Engaging Speaker",
      image: "/online event/grid3.png",
      span: "row-span-3 md:row-span-2",
      hight: 370,
    },
    {
      title: "Professional Webinar Engaging",
      image: "/online event/grid4.png",
      span: "row-span-2 md:row-span-3",
      hight: 370,
    },
    {
      title: "Webinar Engaging Speaker",
      image: "/online event/grid5.png",
      span: "row-span-3",
      hight: 480,
    },
    {
      title: "Engaging Speaker Meeting",
      image: "/online event/grid6.png",
      span: "row-span-2 md:row-span-3",
      hight: 480,
    },
    {
      title: "Collaborate with Webflow",
      image: "/online event/grid7.jpg",
      span: "row-span-3 md:row-span-2",
      hight: 480,
    },
    {
      title: "Focused Man on Using Mustard",
      image: "/online event/grid8.png",
      span: "row-span-2",
      hight: 370,
    },
  ];

  return (
    <div className="min-h-screen w-full p-4 md:p-8">
      <h1 className="md:text-7xl sm:text-5xl text-3xl  text-white font-Berlin">
        PeerHub <HighlightText text="Live" />
      </h1>
      <p className=" text-white/80 font-Raleway md:text-xl my-8">
        PeerHub’s online events bring learning and networking to your
        fingertips. From webinars and workshops to hackathons and expert talks,
        our virtual events are designed to help you expand your skills, connect
        with industry leaders, and explore new opportunities — all from the
        comfort of your home.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[100px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg md:col-span-1 ${item.span}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-4 left-4 right-4 text-white font-semibold text-lg leading-tight">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="py-6 flex justify-center">
        <Link
          href="https://www.instagram.com/peerhub101?igsh=MWxvZWhlMjkxNzk2MA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button label="Join the Event" />
        </Link>
      </div>
    </div>
  );
}

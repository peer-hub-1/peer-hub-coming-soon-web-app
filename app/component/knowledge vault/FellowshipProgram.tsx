import HighlightText from "../UI/HighlightText";
import Carousel from "../UI/Carousel";
import Image from "next/image";
import Button from "../UI/Button";
import Link from "next/link";

const data = [
  {
    image: "/fellowship program/Full Stack Development.jpg",
    bottomImage: "/fellowship program/1.svg",
    title: "Full Stack Development",
  },
  {
    image: "/fellowship program/Data Science and Machine Learning.jpg",
    bottomImage: "/fellowship program/2.svg",
    title: "Data Science and Machine Learning",
  },
  {
    image: "/fellowship program/Game Development and Simulation.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "Game Development and Simulation",
  },
  {
    image: "/fellowship program/Cybersecurity and Ethical Hacking.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "Cybersecurity and Ethical Hacking",
  },
  {
    image: "/fellowship program/Cloud Computing and DevOps.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "Cloud Computing and DevOps",
  },
  {
    image: "/fellowship program/UIUX Design and Prototyping.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "UI/UX Design and Prototyping",
  },
  {
    image: "/fellowship program/Marketing Strategy and Analytics.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "Marketing Strategy and Analytics",
  },
  {
    image:
      "/fellowship program/Financial Modelling and Investment Strategies.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "Financial Modelling and Investment Strategies",
  },
  {
    image: "/fellowship program/Graphic and Motion Design.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "Graphic and Motion Design",
  },
  {
    image: "/fellowship program/Startup Incubation and Business Strategy.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "Startup Incubation and Business Strategy",
  },
  {
    image:
      "/fellowship program/Advanced Supply Chain and Logistics Management.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "Advanced Supply Chain and Logistics Management",
  },
  {
    image:
      "/fellowship program/Corporate Strategy and Business Development.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "Corporate Strategy and Business Development",
  },
];

const FellowshipProgram = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <h1 className="md:text-7xl sm:text-5xl text-3xl  text-white font-Berlin text-center">
        Fellowship <HighlightText text="Program" />
      </h1>
      <p className=" text-white/80 font-Raleway md:text-xl my-8 text-center">
        The 7-month Fellowship Program combines 5 months of live advanced
        training with 2 months of live projects, offering in-depth
        specialization and hands-on industry exposure. Beyond skill-building,
        fellows gain access to freelancing opportunities, expert mentoring for
        startup ideas, office space, and support in development and marketing to
        bring their entrepreneurial visions to life. Additionally, fellows can
        share their knowledge by teaching Foundation Labs and earning while they
        learn. This program empowers students to excel in their fields, launch
        startups, and explore diverse career pathways.
      </p>
      <Carousel>
        {data.map((item) => (
          <div className="h-[440px] rounded-2xl font-Raleway px-4">
            <div className="flex flex-col justify-end relative h-full p-4">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover rounded-2xl -z-10 opacity-60"
              />
              <div className="flex items-center">
                {/* <Image
                  src={item.bottomImage}
                  alt=""
                  width={80}
                  height={80}
                  className="relative right-6 -z-10"
                /> */}
                <p className="text-xl font-semibold text-white">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="my-6 flex justify-center">
        <Link
          href="https://www.instagram.com/peerhub101?igsh=MWxvZWhlMjkxNzk2MA=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button label="Explore More" />
        </Link>
      </div>
    </div>
  );
};

export default FellowshipProgram;

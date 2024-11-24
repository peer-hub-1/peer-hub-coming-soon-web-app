import HighlightText from "../UI/HighlightText";
import Carousel from "../UI/Carousel";
import Image from "next/image";
import Button from "../UI/Button";

const data = [
  {
    image: "/foundation labs/Python Programming.jpg",
    topImage: "/foundation labs/Python Programming.jpg",
    title: "Python Programming",
  },
  {
    image: "/foundation labs/Java programming.jpg",
    topImage: "/foundation labs/Civil.svg",
    title: "Java programming",
  },
  {
    image: "/foundation labs/CC++.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "C/C++",
  },
  {
    image: "/foundation labs/SQL NoSQL.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "SQL/ NoSQL",
  },
  {
    image: "/foundation labs/LinuxUnix.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Linux/Unix",
  },
  {
    image: "/foundation labs/FrontEnd Development.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "FrontEnd Development",
  },
  {
    image: "/foundation labs/UIUX Design.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "UI/UX Design",
  },
  {
    image: "/foundation labs/Cybersecurity Basics.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Cybersecurity Basics",
  },
  {
    image: "/foundation labs/Cloud Computing Essentials.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Cloud Computing Essentials",
  },
  {
    image: "/foundation labs/Marketing Fundamentals.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Marketing Fundamentals",
  },
  {
    image: "/foundation labs/Financial Analysis with Excel.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Financial Analysis with Excel",
  },
  {
    image: "/foundation labs/Data Visualization with Power BITableau.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Data Visualization with Power BI/Tableau",
  },
  {
    image: "/foundation labs/Supply Chain and Logistics Management Basics.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Supply Chain and Logistics Management Basics",
  },
  {
    image: "/foundation labs/Business Communication Skills.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Business Communication Skills",
  },
  {
    image: "/foundation labs/Human Resource Analytics.jpg",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Human Resource Analytics",
  },
];

const FoundationLabs = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <h1 className="md:text-7xl sm:text-5xl text-3xl  text-white font-Berlin text-center">
        Foundation <HighlightText text="Labs" />
      </h1>
      <p className=" text-white/80 font-Raleway md:text-xl my-8 text-center">
        Foundation Labs are carefully designed Fundamental Courses tailored for
        seeking to master the basics of specific domains. These hands-on,
        beginner-friendly courses cover essential concepts and skills, laying
        the groundwork for a successful journey in fields like engineering,
        technology, and beyond. What makes Foundation Labs unique is that they
        are led by senior college students in their 3rd or 4th year, who are
        experts in their respective domains. Their peer-to-peer teaching
        approach ensures relatable, engaging, and practical learning
        experiences. With Foundation Labs, students gain the confidence and
        knowledge needed to thrive in their chosen fields.
      </p>
      <Carousel>
        {data.map((item) => (
          <div className="h-[440px] rounded-2xl font-Raleway px-4">
            <div className="flex flex-col justify-end relative h-full p-4">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover rounded-2xl -z-10 opacity-80"
              />
              {/* <Image
                src={item.topImage}
                alt=""
                width={80}
                height={80}
                className="relative -z-10"
              /> */}
              <p className="text-xl font-semibold text-white">{item.title}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="py-6 flex justify-center">
        <Button label="Read More" />
      </div>
    </div>
  );
};

export default FoundationLabs;

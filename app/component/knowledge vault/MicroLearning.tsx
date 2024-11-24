import HighlightText from "../UI/HighlightText";
import Carousel from "../UI/Carousel";
import Image from "next/image";

const data = [
  {
    image: "/micro learning/Music and DJing Industry.jpg",
    title: "Music and DJing Industry ",
  },
  {
    image: "/micro learning/Design Industry.jpg",
    title: "Design Industry",
  },
  {
    image: "/micro learning/Finance Industry.jpg",
    title: "Finance Industry",
  },
  {
    image: "/micro learning/Gaming Industry.jpg",
    title: "Gaming Industry",
  },
  {
    image: "/micro learning/Tech Industry.jpg",
    title: "Tech Industry",
  },
  {
    image: "/micro learning/Marketing Industry.jpg",
    title: "Marketing Industry",
  },
  {
    image: "/micro learning/Start Up Industry.jpg",
    title: "Start Up Industry",
  },
  {
    image: "/micro learning/GIG Industry.jpg",
    title: "GIG Industry",
  },
  {
    image: "/micro learning/Research Industry.jpg",
    title: "Research Industry",
  },
  {
    image: "/micro learning/Energy Industry.jpg",
    title: "Energy Industry",
  },
];

const MicroLearning = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <h1 className="md:text-7xl sm:text-5xl text-3xl  text-white font-Berlin text-center">
        Micro <HighlightText text="Learning" />
      </h1>
      <p className=" text-white/80 font-Raleway md:text-xl my-8 text-center">
        Micro-Learning offers curated playlists of short, engaging videos
        designed to provide a comprehensive overview of specific industries.
        Whether it's Design, Tech, Finance, or Engineering, these playlists
        introduce you to the industry's core concepts, specializations, career
        pathways, and basic skills. Featuring expert insights and roundtable
        discussions, Micro-Learning serves as your first step toward exploring
        and understanding an industry, empowering you to make informed decisions
        about your future.
      </p>
      <Carousel>
        {data.map((item) => (
          <div className="h-[440px] rounded-2xl font-Raleway px-4">
            <div className="flex flex-col relative h-full">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover rounded-2xl -z-10 opacity-70"
              />
              <p className="flex-grow text-center text-white text-xl flex justify-center items-center">
                Coming Soon
              </p>
              <div className="flex items-center">
                <Image
                  src="/micro learning/Group.svg"
                  alt=""
                  width={80}
                  height={80}
                  className="relative right-6 -z-10"
                />
                <p className="text-xl font-semibold text-white">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MicroLearning;

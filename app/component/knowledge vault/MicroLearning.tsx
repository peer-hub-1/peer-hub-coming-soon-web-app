import HighlightText from "../UI/HighlightText";
import Carousel from "../UI/Carousel";
import Image from "next/image";

const data = [
  {
    image: "/micro learning/micro-learning-bg.png",
    title: "Python",
  },
  {
    image: "/micro learning/micro-learning-bg.png",
    title: "Finance",
  },
  {
    image: "/micro learning/micro-learning-bg.png",
    title: "Marketing",
  },
];

const MicroLearning = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <h1 className="md:text-7xl sm:text-5xl text-3xl  text-white font-Berlin text-center">
        Micro <HighlightText text="Learning" />
      </h1>
      <p className=" text-white/80 font-Raleway md:text-xl my-8 text-center">
        Getting students ready for today’s industry needs with Haas and Autodesk
        Fusion curriculum. Revealing perspectives technology.
      </p>
      <Carousel>
        {data.map((item) => (
          <div className="h-[440px] rounded-2xl font-Raleway px-4">
            <div className="flex flex-col relative h-full">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover rounded-2xl -z-10"
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

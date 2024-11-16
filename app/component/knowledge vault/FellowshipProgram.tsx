import HighlightText from "../UI/HighlightText";
import Carousel from "../UI/Carousel";
import Image from "next/image";
import Button from "../UI/Button";

const data = [
  {
    image: "/fellowship program/French.jpg",
    bottomImage: "/fellowship program/1.svg",
    title: "French Language",
  },
  {
    image: "/micro learning/micro-learning-bg.png",
    bottomImage: "/fellowship program/2.svg",
    title: "English Language",
  },
  {
    image: "/fellowship program/German.jpg",
    bottomImage: "/fellowship program/3.svg",
    title: "German Language",
  },
];

const FellowshipProgram = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <h1 className="md:text-7xl sm:text-5xl text-3xl  text-white font-Berlin text-center">
        Fellowship <HighlightText text="Program" />
      </h1>
      <p className=" text-white/80 font-Raleway md:text-xl my-8 text-center">
        Pellentesque fringilla, massa sit amet feugiat mollis, leo turpis
        elementum justo, vel consequat ex urna ut massa maecenas justo sapien.
      </p>
      <Carousel>
        {data.map((item) => (
          <div className="h-[440px] rounded-2xl font-Raleway px-4">
            <div className="flex flex-col justify-end relative h-full">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover rounded-2xl -z-10 opacity-80"
              />
              <div className="flex items-center">
                <Image
                  src={item.bottomImage}
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
      <div className="my-6 flex justify-center">
        <Button label="Explore More" />
      </div>
    </div>
  );
};

export default FellowshipProgram;

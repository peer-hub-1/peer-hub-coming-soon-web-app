import HighlightText from "../UI/HighlightText";
import Carousel from "../UI/Carousel";
import Image from "next/image";
import Button from "../UI/Button";

const data = [
  {
    image: "/foundation labs/electricalBg.png",
    topImage: "/foundation labs/Electrical.svg",
    title: "Electrical",
  },
  {
    image: "/foundation labs/civilBg.png",
    topImage: "/foundation labs/Civil.svg",
    title: "Civil",
  },
  {
    image: "/foundation labs/mechanicalBg.png",
    topImage: "/foundation labs/Mechanical.svg",
    title: "Mechanical",
  },
];

const FoundationLabs = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <h1 className="md:text-7xl sm:text-5xl text-3xl  text-white font-Berlin text-center">
        Foundation <HighlightText text="Labs" />
      </h1>
      <p className=" text-white/80 font-Raleway md:text-xl my-8 text-center">
        Revealing perspectives from Autodesk Learning project-based skills with
        cloud-based design and make technology.
      </p>
      <Carousel>
        {data.map((item) => (
          <div className="h-[440px] rounded-2xl font-Raleway px-4">
            <div className="flex flex-col justify-between relative h-full p-4">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-cover rounded-2xl -z-10 opacity-50"
              />
              <Image
                src={item.topImage}
                alt=""
                width={80}
                height={80}
                className="relative -z-10"
              />
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

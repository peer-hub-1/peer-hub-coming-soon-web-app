import HighlightText from "../UI/HighlightText";
import { CalendarDaysIcon, MapPin } from "lucide-react";
import bg from "../../../public/nasa-foto-snimok-kosmos.jpg";
import Carousel from "../UI/Carousel";
import Image from "next/image";
import Button from "../UI/Button";

const data = [
  {
    image: "/offline event/offlineEvent1.jpg",
    type: "Seminar",
    title: "Man Presenting a Tech",
    date: "Oct 8 ,2024 - 12:30AM",
    address: "40398 Skiles Lock, New Rita 14107",
  },
  {
    image: "/offline event/offlineEvent2.jpg",
    type: "Events",
    title: "Pitch Tank Season 01",
    date: "Oct 8 ,2024 - 12:30AM",
    address: "40398 Skiles Lock, New Rita 14107",
  },
  {
    image: "/offline event/offlineEvent3.jpg",
    type: "Workshop",
    title: "Mature Student in Class",
    date: "Oct 8 ,2024 - 12:30AM",
    address: "40398 Skiles Lock, New Rita 14107",
  },
];

const OfflineEvent = () => {
  return (
    <div className="w-full p-4 md:p-8">
      <h1 className="md:text-7xl sm:text-5xl text-3xl  text-white font-Berlin">
        Event At <HighlightText text="Offline" />
      </h1>
      <p className=" text-white/80 font-Raleway md:text-xl my-8">
        Getting students ready for today’s industry needs with Haas and Autodesk
        Fusion curriculum. Revealing perspectives technology.
      </p>
      <Carousel>
        {data.map((item) => (
          <div className="h-[440px] rounded-2xl font-Raleway px-4">
            <div className="flex flex-col justify-between relative h-full p-5 text-white">
              <Image
                src={item.image}
                alt="jasj"
                fill
                className="object-cover -z-10 rounded-2xl"
              />
              <p className="bg-white rounded-3xl px-4 py-1 text-base text-peerHubOrange w-fit">
                {item.type}
              </p>
              <div className="">
                <h3 className="text-xl font-bold mb-7">{item.title}</h3>
                <p className="text-white flex gap-2 mb-1">
                  <CalendarDaysIcon /> <span>{item.date}</span>
                </p>
                <p className="text-white flex gap-2">
                  <MapPin /> {item.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="py-6 flex justify-center">
        <Button label="Register Now" />
      </div>
    </div>
  );
};

export default OfflineEvent;

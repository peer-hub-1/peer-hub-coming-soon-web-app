"use client";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { MoveLeft, MoveRight } from "lucide-react";

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-scrolling
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024, // Desktop
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // Tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
    arrows: false,
  };

  const sliderRef = useRef<Slider | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      {/* <div className="flex justify-between space-x-4 max-w-xl mx-auto">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="p-4 bg-navbg rounded-full text-peerHubOrange hover:bg-gray-600"
        >
          <MoveLeft />
        </button>
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="p-4 bg-navbg rounded-full text-peerHubOrange hover:bg-gray-600"
        >
          <MoveRight />
        </button>
      </div> */}
    </div>
  );
};

export default Carousel;

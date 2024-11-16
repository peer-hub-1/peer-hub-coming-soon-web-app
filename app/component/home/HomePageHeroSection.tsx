import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import hover1 from "@/public/home/hover1.png";
import hover2 from "@/public/home/hover2.png";
import hover3 from "@/public/home/hover3.png";
import hover4 from "@/public/home/hover4.png";
import hover5 from "@/public/home/hover5.png";
import hover6 from "@/public/home/hover6.png";

interface Block {
  id: number;
  image: StaticImageData;
  position: { top: number; left: number };
}

export default function HomePageHeroSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const centerSafeZone = 200; // px from center where circles won't appear
    const hoverAreaSize = 200; // size of the hover area

    const newBlocks: Block[] = [
      {
        id: 1,
        image: hover1,
        position: { top: 0, left: 0 }, // Will be set correctly below
      },
      {
        id: 2,
        image: hover2,
        position: { top: 0, left: 0 },
      },
      {
        id: 3,
        image: hover3,
        position: { top: 0, left: 0 },
      },
      {
        id: 4,
        image: hover4,
        position: { top: 0, left: 0 },
      },
      {
        id: 5,
        image: hover5,
        position: { top: 0, left: 0 },
      },
      {
        id: 6,
        image: hover6,
        position: { top: 0, left: 0 },
      },
    ];

    const setRandomPosition = (block: Block) => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const centerX = viewportWidth / 2;
      const centerY = viewportHeight / 2;

      let top, left;

      do {
        top = Math.random() * (viewportHeight - hoverAreaSize);
        left = Math.random() * (viewportWidth - hoverAreaSize);
      } while (
        Math.abs(top + hoverAreaSize / 2 - centerY) < centerSafeZone &&
        Math.abs(left + hoverAreaSize / 2 - centerX) < centerSafeZone
      );

      block.position = { top, left };
    };

    newBlocks.forEach(setRandomPosition);
    setBlocks(newBlocks);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden font-Raleway">
      <div className="absolute inset-0 flex items-center justify-center flex-col p-2">
        {children}
      </div>
      {blocks.map((block, index) => (
        <div
          key={block.id}
          className="absolute h-50 w-50 cursor-pointer"
          style={{
            top: `${block.position.top}px`,
            left: `${block.position.left}px`,
            width: "200px",
            height: "200px",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 transform rounded-full shadow-lg transition-all duration-300 ease-in-out ${
              hoveredIndex === index
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0"
            }`}
          >
            <Image
              src="/home/hoverGIF.gif"
              alt={`Circular image ${block.id}`}
              className="w-full aspect-square object-cover rounded-full"
              width={64}
              height={64}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

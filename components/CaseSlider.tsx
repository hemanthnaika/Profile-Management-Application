"use client";

import { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CaseItem = {
  img: StaticImageData;
  title: string;
};

type CaseSliderProps = {
  cases: CaseItem[];
};

const CARD_WIDTH = 350;

const CaseSlider = ({ cases }: CaseSliderProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -CARD_WIDTH,
      behavior: "smooth",
    });
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: CARD_WIDTH,
      behavior: "smooth",
    });
    setActiveIndex((prev) => Math.min(prev + 1, cases.length - 1));
  };

  const scrollToIndex = (index: number) => {
    sliderRef.current?.scrollTo({
      left: index * CARD_WIDTH,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div className="mt-16 relative">
      <div
        ref={sliderRef}
        className="flex gap-8 overflow-x-hidden scroll-smooth px-2"
      >
        {cases.map((item, i) => (
          <div key={i} className="min-w-xs md:min-w-md  rounded-2xl">
            <div className="relative h-64">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="rounded-md"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900 px-2 font-roboto">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-6 px-2">
        {cases.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-2 h-2 rounded-full transition ${
              activeIndex === i ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 right-0 flex gap-3">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition disabled:opacity-40"
          disabled={activeIndex === 0}
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={scrollRight}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition disabled:opacity-40"
          disabled={activeIndex === cases.length - 1}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default CaseSlider;

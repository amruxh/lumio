"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselData } from "@/types";
import Link from "next/link";

const Carousel = ({ slides }: { slides: CarouselData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);


  return (
    <div className="w-full h-full overflow-hidden relative">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide: CarouselData) => (
          <Link key={slide.id} href={'/shop/' + slide.id} className="relative flex-shrink-0 w-full h-[200px] md:h-[400px] flex justify-center items-center">
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover w-full h-full"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

            {/* Text Content */}
            <div className="absolute bottom-5 inset-x-0 z-20 flex flex-col items-start justify-end text-left text-[var(--background)] px-4 md:px-8">
              <h1 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h1>
              <p className="text-sm md:text-base text-[var(--foreground-muted)] max-w-2xl">
                {slide.description}
              </p>
            </div>
          </Link>
        ))
        }
      </div>
      {/* Controls */}
      <button
        onClick={(e) => prevSlide(e)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 -translate-y-1/2 md:left-4 z-30 bg-black/40 hover:bg-black/60 opacity-25 hover:opacity-100 cursor-pointer text-white p-2 rounded-full transition-all ease-in-out"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={(e) => nextSlide(e)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 -translate-y-1/2 md:right-4 z-30 bg-black/40 hover:bg-black/60 opacity-25 hover:opacity-100 cursor-pointer text-white p-2 rounded-full transition-all ease-in-out"
      >
        <ChevronRight size={24} />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {slides.map((_: CarouselData, idx: number) => (
          <div
            key={idx}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full ${currentIndex === idx ? "bg-white" : "bg-white/40"} cursor-pointer`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

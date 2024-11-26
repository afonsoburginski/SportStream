"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import "./Carousel.css";

const slides = [
  "/slides/champions-league.png",
  "/slides/europa-league.avif",
  "/slides/premier-league.jpg",
  "/slides/copa-libertadores.jpg",
  "/slides/sula_banner.jpg",
];

export default function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = slides.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const getSlideClass = (index: number) => {
    const diff = (index - currentIndex + totalSlides) % totalSlides;

    if (diff === 0) return "carousel-slide active";
    if (diff === 1) return "carousel-slide right";
    if (diff === 2) return "carousel-slide right-2";
    if (diff === totalSlides - 1) return "carousel-slide left";
    if (diff === totalSlides - 2) return "carousel-slide left-2";
    return "carousel-slide hidden";
  };

  return (
    <div className="carousel-container flex items-center justify-center w-full h-full">
      <div className="carousel-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={getSlideClass(index)}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          >
            {getSlideClass(index) === "carousel-slide active" && (
              <div className="absolute top-2 left-2">
                <Badge className="bg-red-600">AO VIVO</Badge>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="carousel-btn next" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
}

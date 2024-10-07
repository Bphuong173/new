import React, { useState, useEffect, useMemo } from "react";
import Smiley from "./image/icon-smiley.svg";
import backgroundImage from "./image/background-grid.svg";
import { AnimatedSection } from "./animatedsection";
import "./section2.css";
import "./custom.css";

import Promise1 from "./image/promise_1.webp";
import Promise2 from "./image/promise_2.webp";
import Promise3 from "./image/promise_3.webp";
import Promise4 from "./image/promise_4.webp";
import Promise5 from "./image/promise_5.webp";
import Promise6 from "./image/promise_6.webp";
import Promise7 from "./image/promise_7.webp";

export default function Section2() {
  const images = [
    Promise1,
    Promise2,
    Promise3,
    Promise4,
    Promise5,
    Promise6,
    Promise7,
  ];
  const [hoveredImage, setHoveredImage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(images.map(loadImage))
      .then(() => setImagesLoaded(true))
      .catch((err) => console.error("Error loading images", err));
  }, []);

  const handleMouseEnter = (imageNumber) => {
    setHoveredImage(imageNumber);
  };

  const handleMouseLeave = () => {
    setHoveredImage(1);
  };

  const promiseContent = [
    { title: "STAY FOCUSED ON GOALS" },
    { title: "EASILY TRACK YOUR PROGRESS" },
    { title: "PLAN PROJECTS EFFECTIVELY" },
    { title: "BOOST PRODUCTIVITY LEVELS" },
    { title: "EASILY ARRANGE AND MANAGE TASKS" },
    { title: "CUSTOMIZABLE TASK LISTS" },
    { title: "BUILD GOOD HABITS DAILY" },
  ];

  const memoizedImages = useMemo(() => {
    return images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt={`Promise ${index + 1}`}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
          hoveredImage === index + 1 ? "opacity-100" : "opacity-0"
        }`}
      />
    ));
  }, [hoveredImage, images]);

  return (
    <>
      <div
        id="section-2"
        className="w-full h-full bg-[#989696] p-[14px] pt-0 relative bg-[position:6.35rem_0rem]"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div id="promise nav-blue locked" className="w-full">
          <div
            id="grid"
            className="flex flex-col lg:flex-row justify-between relative"
          >
            <div id="col" className="w-full lg:w-[339px] h-auto lg:h-[1673px]">
              <AnimatedSection
                id="block-sectionBlock-anima-in"
                className="bg-white border border-black rounded-md w-[240px] xs:w-[275px] sm:w-[300px] lg:w-full max-w-[339px] h-[153.4px] mr-[60px] sm:mr-[80px] lg:mr-0"
                animationClass="slide-in-left"
              >
                {/* ... (rest of the AnimatedSection content remains unchanged) ... */}
              </AnimatedSection>
              <div
                id="promise-images"
                className="hidden lg:block w-[339px] h-[414px] mt-[14px] bg-white rounded-[5px] border border-black sticky top-[50px] overflow-hidden"
              >
                {imagesLoaded && memoizedImages}
              </div>
            </div>
            <div
              id="section-couter"
              className="bg-white absolute top-0 right-0 lg:static lg:z-[1000]"
            >
              <h1 className="font-pp-right text-xl lg:text-[27px] overflow-hidden">
                01
              </h1>
              <p className=""></p>
            </div>
            <div
              id="col1"
              className="bg-white rounded-[5px] mt-6 lg:mt-0 lg:ml-[14px] relative 2xl:min-w-[1539px]"
            >
              <div
                id="promise-text"
                className="relative pt-[50px] px-[20px] pb-[50px] lg:pt-[138px] lg:pr-[124px] lg:pb-[142px] lg:pl-[167px]"
              >
                <div>
                  {promiseContent.map((content, index) => (
                    <div
                      key={index}
                      id={`content-block${index > 0 ? index : ""}`}
                      className="relative pt-[50px] pb-[50px] w-full lg:w-auto"
                    >
                      <h1
                        id={`inside${index > 0 ? index : ""}`}
                        className="font-pp-right w-[36px] h-[36px] border border-black text-sm lg:text-[19px] flex items-center justify-center absolute top-0 left-0 lg:top-[50px] lg:left-[-40px]"
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </h1>
                      <h1
                        id={`letter${index > 0 ? index : ""}`}
                        className="font-pp-right text-3xl lg:text-[90.5px] leading-tight lg:leading-[70px] ml-[50px] lg:ml-0"
                        onMouseEnter={() => handleMouseEnter(index + 1)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {content.title}
                      </h1>
                      {hoveredImage === index + 1 && (
                        <img
                          src={images[index]}
                          alt={`Promise ${index + 1}`}
                          className="w-full max-w-[180px] h-auto mt-4 mx-auto lg:hidden"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

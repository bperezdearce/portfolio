"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { BsGithub, BsYoutube, BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Sí, voy",
    description:
      "Real project in which I contributed to the implementation of dynamic and responsive interfaces, actively participating in the design and coding of an inclusive UX/UI for users with diverse disabilities.",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Figma" },
      { name: "Vercel" },
    ],
    image: "/assets/work/si-voy.png",
    alt: "Sí, voy",
    demo: "https://www.youtube.com/watch?v=73N9lGJr55I",
    github: "https://github.com/sivoyweb/Front",
  },
  {
    num: "02",
    category: "frontend",
    title: "Jobs&Wozniak",
    description:
      "A fictional Apple product e-commerce site where users can add and remove products from the cart, proceed to checkout, log in and out of their accounts, and view their user information and purchase history.",
    stack: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind.css" },
      { name: "Figma" },
      { name: "Vercel" },
    ],
    image: "/assets/work/jobs-wozniak.png",
    alt: "Jobs&Wozniak",
    live: "https://jobs-wozniak-e-commerce.vercel.app/",
    github: "https://github.com/bperezdearce/Jobs-Wozniak---E-Commerce",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Domenica",
    description:
      "Development of an app that functions as a reservation manager for customers of a fictional restaurant called Domenica. The users can make and delete reservations, and the app will update the database accordingly.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Redux" },
      { name: "Vite" },
      { name: "Express" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Vercel" },
    ],
    image: "/assets/work/domenica.png",
    alt: "Domenica",
    live: "https://domenica-git-main-bperezdearces-projects.vercel.app/",
    github: "https://github.com/bperezdearce/domenica",
  },
  {
    num: "04",
    category: "fullstack",
    title: "LatinoMedia",
    description:
      "Development of an app that works as a catalog for Latin American movies. Users of the app can add movies through a form, and the app will add them to the database and display the movies on the main page.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Bootstrap" },
      { name: "Express" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
    ],
    image: "/assets/work/latinomedia.png",
    alt: "LatinoMedia",
    live: "",
    github: "https://github.com/bperezdearce/latinomedia",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper: SwiperType) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div className="flex gap-10 items-center">
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-hover transition-all duration-500">
                  {project.title}
                </h2>
                <div className="flex items-center gap-4">
                  {/* github repository button */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent-hover" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* live project button */}
                  {/* {project.live && (
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-hover" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )} */}
                  {/* youtube demo button */}
                  {project.demo && (
                    <Link href={project.demo}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsYoutube className="text-white text-3xl group-hover:text-accent-hover" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent-default">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* <div className="border border-white/20"></div> */}
              {/* buttons */}
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-transparent">
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-scale-down"
                          alt={project.alt}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                cointainerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;

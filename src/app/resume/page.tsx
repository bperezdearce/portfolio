"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaFigma,
  FaVuejs,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAstro,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiVercel,
  SiVite,
  SiRedux,
  SiMongoose,
  SiJasmine,
  SiJest,
  SiDjango,
  SiNgrok,
  SiSwagger,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// about data
const about = {
  title: "About me",
  description:
    "Full Stack Developer and BSc. Sociology. I am committed to combining technology with sociological insights as I advance in web development, pursuing this path with purpose and determination.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Bárbara Pérez de Arce",
    },
    {
      fieldName: "Location",
      fieldValue: "Santiago, Chile",
    },
    {
      fieldName: "Experience",
      fieldValue: "1 Year",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+56) 981 272 793",
    },
    {
      fieldName: "Email",
      fieldValue: "barbara.perezdearce@gmail.com",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My latest experience",
  description:
    "My professional journey spans research, consultancy, and education, reflecting my commitment to innovation and impactful solutions.",
  items: [
    {
      company: "Sí, Voy",
      position: "Frontend Developer",
      duration: "Sept 2024 - Oct 2024",
    },
    {
      company: "Henry Bootcamp",
      position: "Teaching Assistant",
      duration: "Aug 2024 - Oct 2024",
    },
    {
      company: "International Labour Organization",
      position: "Freelance Consultant",
      duration: "Jan 2021 - May 2023",
    },
    {
      company: "Embodied Reports",
      position: "Research Analyst",
      duration: "Aug 2019 - Jan 2021",
    },
    {
      company: "Observatorio Digital de la Música",
      position: "Research Analyst",
      duration: "Aug 2019 - Jan 2021",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "The bridge between both of my educational experiences allows me to create meaningful digital experiences, combining humanities and technology.",
  items: [
    {
      institution: "Meta",
      degree: "React Native Certificate",
      graduation: "2025",
    },
    {
      institution: "Henry Bootcamp",
      degree: "Full Stack Development",
      graduation: "2024",
    },
    {
      institution: "Universidad de Chile",
      degree: "Sociology",
      graduation: "2010 - 2014",
    },
  ],
};

//technologies data
const technologies = {
  title: "Technology stack",
  technologyList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiJavascript />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
    },
    {
      icon: <SiAstro />,
      name: "astro",
    },
    {
      icon: <SiVite />,
      name: "vite",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <SiExpress />,
      name: "express",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <SiSwagger />,
      name: "swagger ui",
    },
    {
      icon: <FaReact />,
      name: "react native",
    },
    {
      icon: <SiMongoose />,
      name: "mongoose",
    },
    {
      icon: <SiMongodb />,
      name: "mongoDB",
    },
    {
      icon: <SiPostgresql />,
      name: "postgreSQL",
    },
    {
      icon: <GrMysql />,
      name: "mySQL",
    },
    {
      icon: <SiVercel />,
      name: "vercel",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <SiNgrok />,
      name: "ngrok",
    },
    {
      icon: <SiJasmine />,
      name: "jasmine",
    },
    {
      icon: <SiJest />,
      name: "jest",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="technologies">Technology stack</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] xl:max-w-[800px] text-white/60 mx-auto xl:mx-0 xl:text-justify">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60 text-sm">
                          {item.fieldName}
                        </span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-default">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex gap-3 items-center">
                            <p className="text-white/60 text-sm text-nowrap">
                              {item.company}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent-default">
                            {item.graduation}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <p className="text-white/60 text-sm">
                              {item.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="technologies" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{technologies.title}</h3>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {technologies.technologyList.map((technology, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent-hover transition-all duration-300">
                                  {technology.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{technology.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
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
  info: [
    {
      fieldName: "Name",
      fieldValue: "Bárbara Pérez de Arce",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+56) 9 8127 2793",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Months",
    },
    {
      fieldName: "Skype",
      fieldValue: "Bárbara",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Chilean",
    },
    {
      fieldName: "E-mail",
      fieldValue: "barbara.perezdearce@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis corrupti facilis atque saepe! Sequi mollitia beatae facere!",
  items: [
    {
      company: "Henry",
      position: "Teaching Assistant",
      duration: "aug 2024 - oct 2024",
    },
    {
      company: "ILO - International Labour Organization",
      position: "Freelance Consultant",
      duration: "jan 2021 - may 2023",
    },
    {
      company: "Embodied Reports",
      position: "Research Analyst",
      duration: "aug 2019 - jan 2021",
    },
    {
      company: "Observatorio Digital de la Música",
      position: "Research Analyst",
      duration: "aug 2019 - jan 2021",
    },
    {
      company: "Attaché",
      position: "Fauna Prod",
      duration: "nov 2014 - nov 2017",
    },
    {
      company: "Conecta Media",
      position: "Adjunct Consultant",
      duration: "jul 2017 - oct 2017",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis corrupti facilis atque saepe! Sequi mollitia beatae facere!",
  items: [
    {
      institution: "Henry",
      degree: "Full Stack Development",
      duration: "jun 2024 - oct 2024",
    },
    {
      institution: "Universidad de Chile",
      degree: "Sociology",
      duration: "mar 2010 - dic 2014",
    },
    {
      institution: "Universidad de Chile",
      degree: "Sociology",
      duration: "mar 2010 - dic 2014",
    },
    {
      institution: "Universidad de Chile",
      degree: "Sociology",
      duration: "mar 2010 - dic 2014",
    },
    {
      institution: "Universidad de Chile",
      degree: "Sociology",
      duration: "mar 2010 - dic 2014",
    },
    {
      institution: "Universidad de Chile",
      degree: "Sociology",
      duration: "mar 2010 - dic 2014",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis corrupti facilis atque saepe! Sequi mollitia beatae facere!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div>
                
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="about" className="w-full">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

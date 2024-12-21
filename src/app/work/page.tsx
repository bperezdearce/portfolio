"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
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
    title: "project 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt minima laborum maiores, dignissimos debitis accusantium facere officia.",
    stack: [{ name: "Html 5" }, { name: "Css3" }, { name: "Javascript" }],
    image: ""
  },
];

const Work = () => {
  return <div>work</div>;
};

export default Work;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <div>
        <div>
          <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
            <Image
              src="/assets/photo.png"
              priority
              quality={100}
              fill
              alt="Bárbara PDA"
              className="rounded-full object-contain"
            />
          </div>
        </div>

        <motion.svg
          className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253.5"
            r="247"
            stroke="#FBBE0D"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Photo;

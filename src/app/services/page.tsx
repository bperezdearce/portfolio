"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Application Development",
    description:
      "I create responsive and scalable web applications tailored to your needs, ensuring optimal performance and smooth user experiences.",
    href: "Web Application Development",
  },
  {
    num: "02",
    title: "Mobile Application Development",
    description:
      "I design and develop intuitive mobile apps for iOS and Android, focusing on functionality, usability, and engaging interfaces.",
    href: "Mobile Application Development",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "I craft user-centered designs that enhance usability and create visually appealing experiences, aligning with your brand identity.",
    href: "UI/UX Design",
  },
  {
    num: "04",
    title: "Research",
    description:
      "I apply scientific methods to social research and market studies, delivering insightful analyses and actionable recommendations.",
    href: "Research",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-black text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                    <BsArrowDownRight className="text-primary text-3xl" />
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent-default transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-white/60">{service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

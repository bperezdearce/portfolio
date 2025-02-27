"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import React from "react";

type HomePageClientProps = {
  totalCommits: number;
};

export default function HomePageClient({ totalCommits }: HomePageClientProps) {
  return (
    <>
      <motion.section
        className="h-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* Sección de texto */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl text-white/60">
                Full Stack Developer and Sociologist
              </span>
              <h1 className="h1 mb-6">
                Hello! I&apos;m <br />{" "}
                <span className="text-accent-default">Bárbara PDA</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Creating digital experiences with sociological insights, driven by people's voices and needs.
              </p>

              {/* Botón y Social */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <a
                    href="/assets/CV_Barbara_Perez_de_Arce-ENG.pdf"
                    download="CV Bárbara Pérez de Arce - ENG.pdf"
                  >
                    <span>Download CV</span>
                  </a>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Sección de foto */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        {/* Componente Stats, que muestra el total de commits */}
        <Stats totalCommits={totalCommits} />
      </motion.section>
    </>
  );
}
"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 0.6,
    text: "Year of experience",
  },
  {
    num: 5,
    text: "Projects completed",
  },
  {
    num: 22,
    text: "Technologies in my stack",
  },
  {
    num: 441,
    text: "Contributions in the last year",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        {/* Layout for stats */}
        <div className="grid grid-cols-2 gap-6 max-w-[80vw] mx-auto sm:flex sm:flex-wrap xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col items-center text-center sm:flex-1 sm:flex-row sm:gap-4 sm:justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`mt-2 sm:mt-0 ${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

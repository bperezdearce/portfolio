"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { WorkSliderBtnsProps } from "@/interfaces/interfaces";

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ cointainerStyles, btnStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={cointainerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold/>
      </button>
      <button className={btnStyles}>
        <PiCaretRightBold onClick={() => swiper.slideNext()}/>
      </button>
    </div>
  );
};

export default WorkSliderBtns;
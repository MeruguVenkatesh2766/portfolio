import React from "react";
import ServicesCard from "../layouts/ServicesCard";
import { BiCodeAlt } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { GrApple } from "react-icons/gr";
import { AiOutlineCodepen } from "react-icons/ai";
import { PiGameControllerFill } from "react-icons/pi";
import { BsWordpress } from "react-icons/bs";
import { expertiseDescriptions } from "../data"

const Services = () => {
  const icon1 = <FaLaptopCode size={55} className="text-brightColor" />;
  const icon2 = <BiCodeAlt size={55} className="text-brightColor" />;
  const icon3 = <RiLightbulbFlashLine size={55} className="text-brightColor" />;
  const icon4 = <AiOutlineCodepen size={55} className="text-brightColor" />;
  const icon5 = <PiGameControllerFill size={55} className="text-brightColor" />;
  const icon6 = <BsWordpress size={55} className="text-brightColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-between items-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="text-center font-semibold text-4xl mt-24 lg:mt-16 mb-8 lg:mb-7">
        My Expertise
      </h1>

      <div className="flex flex-wrap items-center justify-between w-full gap-5 mt-4">
        <div className="w-full md:w-custom-width lg:w-custom-width">
          <ServicesCard icon={icon1} title="Frontend development" para={expertiseDescriptions["front-end"]} />
        </div>
        <div className="w-full md:w-custom-width lg:w-custom-width">
          <ServicesCard icon={icon2} title="Backend development" para={expertiseDescriptions["back-end"]} />
        </div>
        <div className="w-full md:w-custom-width lg:w-custom-width">
          <ServicesCard icon={icon3} title="DSA" para={expertiseDescriptions.dsa} />
        </div>
        <div className="w-full md:w-custom-width lg:w-custom-width">
          <ServicesCard icon={icon4} title="Freelancing" para={expertiseDescriptions.freelancer} />
        </div>
      </div>

    </div>
  );
};

export default Services;

import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import lightImg from "../assets/img/myself.jpg";
import darkImg from "../assets/img/myself9.jpg";
import svgIcon from "../assets/blob.svg"
import Button from "../layouts/Button";

const Home = ({ darkMode }) => {
  const textColor = darkMode ? "text-white" : "text-black";
  const iconColor = darkMode ? "white" : "black";

  return (
    <div className={`min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 ${darkMode ? "bg-black" : "bg-backgroundColor"}`}>
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className={`text-5xl font-semibold leading-tight mt-5 ${textColor}`}>
          I'm Venkatesh <br />
          <span className={`text-brightColor ${textColor}`}> Full-Stack </span>
          Developer
        </h1>
        <p className={`pr-5 ${textColor}`}>
          Crafting high-paced, responsive, and user-friendly applications. Coding with a full-stack flair, blending innovation with efficiency.
        </p>
        <a href="https://drive.google.com/file/d/1vN758U3msnVkaBleK6SU9zIIr3Zr4k0g/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button title="View CV" darkMode={darkMode} />
        </a>
        <br />
        <h2 className={`text-base uppercase font-titleFont mb-4 ${textColor}`}>
          Find me in
        </h2>
        <div className="flex gap-10">
          <a href="https://www.linkedin.com/in/merugu-venkatesh-6b02a2214/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin color={`${iconColor}`} size={32} />
          </a>
          <a href="mailto:meruguvenkatesh96@gmail.com">
            <BiLogoGmail color={`${iconColor}`} size={32} />
          </a>
          <a href="https://github.com/MeruguVenkatesh2766" target="_blank" rel="noopener noreferrer">
            <FaGithub color={`${iconColor}`} size={32} />
          </a>
          <FaFacebook color={`${iconColor}`} size={32} />
        </div>
      </div>
      <div className="">
        <img width={450} src={darkMode? lightImg : darkImg} alt="img" />
      </div>
    </div>
  );
};

export default Home;

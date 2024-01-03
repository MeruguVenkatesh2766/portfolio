import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaLinkedin, FaDiscord, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../assets/img/me.jpg";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="flex flex-col items-center text-center lg:text-start lg:items-start w-full lg:w-3/4 space-y-4">
        <h1 className=" text-5xl font-semibold leading-tight mt-5">
          I'm Venkatesh <br />
          <span className=" text-brightColor"> Full-Stack </span>
          Developer
        </h1>
        <p className="pr-5">
          Crafting high-paced, responsive, and user-friendly applications. Coding with a full-stack flair, blending innovation with efficiency.
        </p>
        <Link to="https://drive.google.com/file/d/1vN758U3msnVkaBleK6SU9zIIr3Zr4k0g/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button title="View CV" />
        </Link>
        <br />
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className=" flex gap-10">
          <Link to="https://www.linkedin.com/in/merugu-venkatesh-6b02a2214/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={32} className=" hover:text-brightColor transition-all cursor-pointer" />
          </Link>
          <a href="mailto:meruguvenkatesh96@gmail.com">
            <BiLogoGmail size={32} className="hover:text-brightColor transition-all cursor-pointer" />
          </a>
          <Link to="https://github.com/MeruguVenkatesh2766" target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} className=" hover:text-brightColor transition-all cursor-pointer" />
          </Link>
          <FaFacebook size={32} className=" hover:text-brightColor transition-all cursor-pointer" />
        </div>
      </div>
      <div className="">
        <img width={550} src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;

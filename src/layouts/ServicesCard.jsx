import React from "react";

const ServicesCard = (props) => {
  return (
    <div className="flex flex-col items-center bg-white transition-all hover:-translate-y-2 w-full py-5 gap-2 cursor-pointer rounded-md">
      <div>
        <span>{props.icon}</span>
      </div>
      <h2 className=" text-xl font-semibold">{props.title}</h2>
      <p style={{minHeight:'100px'}} className="px-5">{props.para}</p>
    </div>
  );
};

export default ServicesCard;

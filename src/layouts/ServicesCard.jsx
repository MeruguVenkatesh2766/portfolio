import React from "react";

const ServicesCard = ({ icon, title, para, darkMode }) => {
  return (
    <div className={`flex flex-col items-center ${darkMode ? "bg-gray-900" : "bg-white"} transition-all hover:-translate-y-2 w-full py-5 gap-2 cursor-pointer rounded-md ${darkMode ? "shadow-md-dark" : "shadow-md"}`}>
      <div>
        <span>{icon}</span>
      </div>
      <h2 className={`text-xl font-semibold ${darkMode ? "text-white" : ""}`}>{title}</h2>
      <p style={{ minHeight: '120px' }} className={`px-5 ${darkMode ? "text-gray-300" : "text-black"}`}>{para}</p>
    </div>
  );
};

export default ServicesCard;

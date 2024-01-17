import React from "react";

const EducationCard = (props) => {
  const { title, values, darkMode } = props;

  return (
    <div className={`flex flex-col items-center ${darkMode ? "bg-gray-900" : "bg-white"} transition-all hover:-translate-y-2 w-full py-5 gap-2 cursor-pointer rounded-md ${darkMode ? "shadow-md-dark" : "shadow-md"}`}>
      <div style={{ minHeight: '260px' }} className="w-full">
        <h2 className={`text-xl font-semibold text-center ${darkMode ? "text-white" : ""}`}>{title}</h2>
        {values.map((value, index) => (
          <p
            className={`px-5 pb-2 pt-2 text-base font-normal  ${index !== values.length - 1 && darkMode ? " border-b border-gray-700" : ""
              }`}
            key={index}
          >
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EducationCard;

import React from "react";
import "./index.css"; // Import the CSS file
import Image from "next/image";

const numberOfSections = 7; // Number of sections on the wheel

const skills = [
  "https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png",
  "https://www.svgrepo.com/show/452092/react.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png",
  "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
  "https://static-00.iconduck.com/assets.00/nextjs-icon-512x309-yynfidez.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png",
];
const Wheel = () => {
  return (
    <div className="wheel">
      {skills.map((link, index) => (
        <div
          key={index}
          className="section-container"
          style={{
            transform: `rotate(${index * (360 / numberOfSections)}deg)`,
          }}
        >
          <div className="section-number w-[200px] xl:w-[150px] md:w-[100px] sm:w-[90px]">
            <Image src={link} alt="whatsapp" width={200} height={200} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wheel;

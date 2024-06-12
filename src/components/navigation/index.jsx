"use client";
import { ButtonList } from "@/app/portfolioData";
import React from "react";

const Navigation = () => {
  const angleIncrement = 360 / ButtonList.length;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-between relative">
        {ButtonList.map((button, index) => {
          const angleRadian = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angleRadian)})`;
          const y = `calc(${radius} * ${Math.sin(angleRadian)})`;

          console.log(index, angleRadian, radius, x, y);

          return (
            <button
              key={index}
              className="absolute"
              style={{ transform: `translate(${x}, ${y})` }}
            >
              {button.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;

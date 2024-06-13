"use client";
import { ButtonList } from "@/app/portfolioData";
import React from "react";
import Button from "./Button";

const Navigation = () => {
  const angleIncrement = 360 / ButtonList.length;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <div className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group">
        {ButtonList.map((button, index) => {
          const angleRadian = (index * angleIncrement * Math.PI) / 180;
          const radius = "calc(19vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angleRadian)})`;
          const y = `calc(${radius} * ${Math.sin(angleRadian)})`;

          // console.log(index, angleRadian, radius, x, y);

          return <Button key={button.label} x={x} y={y} {...button} />;
        })}
      </div>
    </div>
  );
};

export default Navigation;

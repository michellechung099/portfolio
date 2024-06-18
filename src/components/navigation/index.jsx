"use client";
import { ButtonList } from "@/app/portfolioData";
import React from "react";
import Button from "./Button";
import Responsive from "../Responsive";
import useScreenWidth from "../hooks/useScreenWidth";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Navigation = () => {
  const angleIncrement = 360 / ButtonList.length;
  // can't use media query for radius size
  const size = useScreenWidth();

  const largeSizeScreen = size >= 900;
  const mediumSizeScreen = size >= 600;

  return (
    <div className="w-full fixed h-screen flex items-center justify-center">
      <Responsive>
        {({ size }) => {
          return size && size >= 480 ? (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="w-max flex items-center justify-center relative hover:pause animate-spin-slow group"
            >
              {ButtonList.map((button, index) => {
                const angleRadian = (index * angleIncrement * Math.PI) / 180;
                // const radius = "calc(19vw - 1rem)";
                const radius = largeSizeScreen
                  ? "calc(20vw - 1rem)"
                  : mediumSizeScreen
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";

                const x = `calc(${radius} * ${Math.cos(angleRadian)})`;
                const y = `calc(${radius} * ${Math.sin(angleRadian)})`;

                // console.log(index, angleRadian, radius, x, y);

                return <Button key={button.label} x={x} y={y} {...button} />;
              })}
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col item-start xs:items-center justify-center relative group xs:hidden space-y-4"
              >
                {ButtonList.slice(0, ButtonList.length / 2).map((button) => {
                  return <Button key={button.label} x={0} y={0} {...button} />;
                })}
              </motion.div>

              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col items-end xs:items-center justify-center relative group xs:hidden space-y-4"
              >
                {ButtonList.slice(ButtonList.length / 2, ButtonList.length).map(
                  (button) => {
                    return (
                      <Button
                        key={button.label}
                        x={0}
                        y={0}
                        {...button}
                        labelDirection="left"
                      />
                    );
                  }
                )}
              </motion.div>
            </>
          );
        }}
      </Responsive>
    </div>
  );
};

export default Navigation;

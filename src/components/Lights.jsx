"use client";
import React, { useEffect, useState } from "react";

const createLights = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

const Lights = () => {
  const [lights, setLights] = useState([]);

  useEffect(() => {
    const addLightsPeriodically = () => {
      const newLight = createLights();
      setLights((currentLights) => [...currentLights.slice(-14), newLight]);
    };

    const interval = setInterval(addLightsPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {lights.map((light) => {
        return (
          <div
            key={light.id}
            className="absolute rounded-full bg-gradient-to-r from-orange-400/40 to-yellow-500/40 w-[10px] h-[10px]"
            style={{
              top: light.top,
              left: light.left,
              animation: `move ${light.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Lights;

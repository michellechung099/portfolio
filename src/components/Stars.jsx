"use client";
import React, { useEffect, useState } from "react";

const createStars = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 3 + 5}s`,
});

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const addStarsPeriodically = () => {
      const newStar = createStars();
      setStars((currentStars) => [...currentStars.slice(-60), newStar]);
    };

    const interval = setInterval(addStarsPeriodically, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {stars.map((star) => {
        return (
          <div
            key={star.id}
            className="star"
            style={{
              top: star.top,
              left: star.left,
              animation: `move ${star.animationDuration} infinite alternate`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Stars;

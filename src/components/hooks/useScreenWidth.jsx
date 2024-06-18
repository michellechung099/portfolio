"use client";
import React, { useEffect, useState } from "react";

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState();

  // gets window screen width and updates when window resizes
  useEffect(() => {
    // gets current width of window
    function getScreenWidth() {
      return window.innerWidth;
    }

    // sets screenWidth state to current width of window
    function handleResize() {
      setScreenWidth(getScreenWidth());
    }

    handleResize();

    // adds event listener to resize event, updates screenWidth
    window.addEventListener("resize", handleResize);

    // cleanup function, removes event listener when component is unmounted/effect is re-run
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export default useScreenWidth;

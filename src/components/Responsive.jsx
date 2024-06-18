"use client";
import React from "react";
import useScreenWidth from "./hooks/useScreenWidth";

const Responsive = ({ children }) => {
  const size = useScreenWidth();

  // render different layouts based on screen width
  return <>{children({ size })}</>;
};

export default Responsive;

import React from "react";
import ProjectLayout from "./ProjectLayout";
import { projectData } from "@/app/portfolioData";

const reverseList = (projects) => {
  // create a shallow copy of projects to not mutate them in-place
  // O(n log n) time
  return [...projects].sort((a, b) => b.id - a.id);
};

const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-10 space-y-6 md:space-y-8 sm:space-y-9 flex flex-col items-center">
      {reverseList(projects).map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </div>
  );
};

export default ProjectList;

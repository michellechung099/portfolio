import { Github } from "lucide-react";
import React from "react";

const ProjectLayout = ({ name, description, demoLink, sourceCode }) => {
  return (
    <div className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg">
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground text-sm">{name} :</h2>
        <p className="text-foreground text-sm">{description}</p>
      </div>
      {/* <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-foreground" /> */}
      <a
        href={sourceCode}
        className="text-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-full h-auto" strokeWidth={1.5} />
      </a>
    </div>
  );
};

export default ProjectLayout;

import React from "react";

const ProjectLayout = ({ name, description, demoLink, sourceCode }) => {
  return (
    <div className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg">
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <a
        href={demoLink}
        className="text-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo Link
      </a>
    </div>
  );
};

export default ProjectLayout;

import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProjectLayout = ({ name, description, demoLink, sourceCode }) => {
  return (
    <div className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg">
      <Link
        href={demoLink}
        target={"_blank"}
        className="flex-grow flex items-center justify-start space-x-2"
      >
        <div className="flex items-center justify-center space-x-2">
          <h2 className="text-foreground text-sm">{name}</h2>
          <p className="text-muted text-sm">{description}</p>
        </div>
      </Link>

      <Link
        href={sourceCode}
        className="text-foreground"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-5 h-5" strokeWidth={1.5} />
      </Link>
    </div>
  );
};

export default ProjectLayout;

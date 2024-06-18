import Image from "next/image";
import bg from "../../../../public/background/project.png";
import ProjectList from "@/components/projects";
import { projectData } from "../../portfolioData";

export default function Projects() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className="fixed w-full top-0 h-full object-cover object-center opacity-90"
      />
      <div className="absolute w-full top-0 h-full bg-black opacity-70"></div>
      <div className="relative z-10">
        <ProjectList projects={projectData} />
      </div>
    </>
  );
}

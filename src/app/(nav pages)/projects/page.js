import Image from "next/image";
import bg from "../../../../public/background/projects.png";
import ProjectList from "@/components/projects";
import { projectData } from "../../portfolioData";

export default function Projects() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed w-full h-full object-cover object-center opacity-70"
      />
      <ProjectList projects={projectData} />
    </>
  );
}

import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import { Mushroom } from "@/components/models/Mushroom";
import AboutMe from "@/components/about";

export default function About() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed w-full top-0 left-0 h-full object-cover object-center opacity-80"
      />
      <div className="w-full h-3/5 xs:h-[81%] sm:h-screen absolute top-3/4 sm:top-[80%] xs:top-[78%] sm:-left-[4%] xs:-left-[5%] -translate-y-1/2 -left-1/6">
        <RenderModel>
          <Mushroom />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[20%] sm:top-[15%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-7xl xs:text-8xl sm:text-9xl lg:text-9xl text-accent">
            Michelle
          </h1>
          <p className="font-light text-foreground text-ls">
            software engineer based in San Francisco
          </p>
        </div>
      </div>

      <AboutMe />
    </>
  );
}

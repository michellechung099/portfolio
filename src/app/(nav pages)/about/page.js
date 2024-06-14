import Image from "next/image";
import bg from "../../../../public/background/about.png";
import RenderModel from "@/components/RenderModel";
import { Mushroom } from "@/components/models/Mushroom";
import AboutMe from "@/components/about";

export default function About() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed w-full top-0 left-0 h-full object-cover object-center opacity-70"
      />
      <div className="w-full h-screen absolute -translate-x-9 -translate-y-[13%]">
        <RenderModel>
          <Mushroom />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[14%] left-1/2 -translate-x-1/2">
          <h1 className="font-bold text-8xl text-accent">Michelle</h1>
          <p className="font-light text-foreground text-ls">
            software engineer based in San Francisco
          </p>
        </div>
      </div>

      <AboutMe />
    </>
  );
}

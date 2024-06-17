import React from "react";
import AboutLayout from "./AboutLayout";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};

const AboutMe = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <ItemLayout className={"col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-2xl text-left w-full capitalize text-accent">
            Full-stack engineer & hobbyist gamer
          </h2>
          <p className="font-light">
            A recent full-stack software engineer at Pear VC-backed Dorsal AI. I
            designed a dashboard to help users extract text-based features from
            SEC filings and earnings call transcripts with Langchain and gpt-4.
            I am currently researching 3D anime-style model generation from AI
            generated 2D images. Previously, I worked at Bank of America and
            graduated from University of Illinois - Urbana Champaign. I'm
            looking to work on new applications of LLMs and 3D tools.
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 flex-col items-start space-y-5"}>
          <h2 className="text-2xl text-left w-full capitalize text-accent">
            Interests
          </h2>
          <p className="text-base font-light">
            electric guitar, writing, reading, gaming, jazz bars, yoga
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-4 flex-col items-start space-y-5"}>
          <h2 className="text-2xl text-left w-full capitalize text-accent">
            Fav Games
          </h2>
          <p className="text-base font-light">
            Terraria, Hades 2, Stardew Valley, League of Legends, Genshin Impact
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=michellechung099&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show_icons=true"
            alt="Michelle Github Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=michellechung099&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show_icons=true"
            alt="Michelle Github Stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutMe;

import React from "react";
import ItemLayout from "./ItemLayout";
import clsx from "clsx";
// import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Full-stack engineer & hobbyist gamer
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            A recent full-stack software engineer at Pear VC-backed Dorsal AI. I
            designed a dashboard to help users extract text-based features from
            SEC filings and earnings call transcripts with Langchain and gpt-4.
            I am currently researching 3D anime-style model generation from AI
            generated 2D images. Previously, I worked at Bank of America and
            graduated from University of Illinois - Urbana Champaign. I am
            looking to work on new applications of LLMs and 3D tools.
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 flex-col items-start space-y-3 sm:space-y-4 xxs:space-y-4"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Interests
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            electric guitar, writing, reading, gaming, jazz bars, yoga, anime
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 flex-col items-start space-y-3 sm:space-y-4 xxs:space-y-4"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize text-accent">
            Fav Games
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Terraria, Hades 2, Stardew Valley, League of Legends, Genshin Impact
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.PUBLIC_GITHUB_STATS_URL}/api/top-langs/?username=michellechung099&theme=transparent&hide_border=true&title_color=FFD700&text_color=E1E1E1&icon_color=FFD700&text_bold=false&show_icons=true`}
            alt="Michelle Github Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.PUBLIC_GITHUB_STATS_URL}/api?username=michellechung099&theme=transparent&hide_border=true&title_color=FFD700&text_color=E1E1E1&icon_color=FFD700&text_bold=false&show_icons=true`}
            alt="Michelle Github Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,aws,babel,express,git,heroku,jquery,mongodb,nextjs,nodejs,postgres,postman,rails,react,redux,ruby,supabase,tailwind,threejs,ts,ubuntu,vercel,obsidian,django&theme=dark"
            alt="Michelle Github Stats"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutMe;

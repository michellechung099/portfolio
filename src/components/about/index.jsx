import React from "react";
import AboutLayout from "./AboutLayout";

const AboutMe = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <AboutLayout className="col-span-full row-span-2 flex-col items-start">
          <h2 className="text-xl text-left w-full">Gamer & An Engineer</h2>
          <p className="font-light text-xs">
            Recent full-stack software engineer at Pear VC-backed Dorsal AI.
            Designed a dashboard to help users extract text-based features from
            SEC filings and earnings call transcripts with Langchain and gpt-4.
            Currently researching 3D anime-style model generation from AI
            generated 2D images. Previously, I worked at Bank of America and
            graduated from University of Illinois - Urbana Champaign. I'm
            looking to work on new applications of LLMs and 3D tools.
          </p>
        </AboutLayout>

        <AboutLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 flex items-center justify-center"
          }
        >
          <h2 className="font-semibold w-full text-left text-2xl text-accent">
            Interests
          </h2>
          <p className="text-light text-sm">
            electric guitar, writing, reading, gaming, jazz bars fav
          </p>
        </AboutLayout>

        {/* <AboutLayout className="{col-span-full xs:col-span-6 lg:col-span-4 flex items-center justify-center}">
          <h2 className="font-semibold w-full text-left text-2xl text-accent">
            Fav Games
          </h2>
          <p className="text-light text-sm">
            Danganronpa, Terraria, Hades 2, Stardew Valley, League of Legends,
            Genshin Impact
          </p>
        </AboutLayout> */}

        <div className="col-span-8 row-span-2 custom-bg p-8 rounded-xl flex items-center justify-center">
          Info
        </div>
        <div className="col-span-4 custom-bg p-8 rounded-xl flex items-center justify-center">
          Info
        </div>
        <div className="col-span-4 custom-bg p-8 rounded-xl flex items-center justify-center">
          Info
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

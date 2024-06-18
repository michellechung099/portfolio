import Image from "next/image";
import bg from "../../public/background/home.png";
import RenderModel from "@/components/RenderModel";
import Witch from "@/components/models/Witch";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-85"
      />
      <div className="absolute w-full h-full bg-black opacity-50 -z-40"></div>
      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Witch />
        </RenderModel>
      </div>
    </main>
  );
}

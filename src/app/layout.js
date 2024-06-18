import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import StarsCanvas from "@/components/ThreeStars";

// imports Inter font from Google fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background, text-foreground")}>
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <StarsCanvas />
        </div>
        {children}
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Stars from "@/components/Stars";
import Lights from "@/components/Lights";

// imports Inter font from Google fonts
const inter = Inter({
  subsets: ["latin"],
  // custom css property
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-background, text-foreground")}>
        {children}
        <Stars />
        <Lights />
      </body>
    </html>
  );
}

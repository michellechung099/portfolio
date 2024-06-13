import {
  Github,
  Home,
  Lightbulb,
  Linkedin,
  Mail,
  Paperclip,
  User,
  Wand,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Wand className="w-full h-auto" strokeWidth={1.5} />;
    case "email":
      return <Mail className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "blog":
      return <Lightbulb className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <Paperclip className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

const Button = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50"
      style={{ transform: `translate(${x}, ${y})` }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset hover:shadow-glass-sm"
        aria-label={label}
        name={label}
      >
        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse">
          {getIcon(icon)}
        </span>
      </Link>
    </div>
  );
};

export default Button;

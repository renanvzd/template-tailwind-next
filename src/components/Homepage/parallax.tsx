import { COMPANY } from "@/constants/general";
import React from "react";

interface ParallaxProps {
  className?: string;
  title: string;
}

const Parallax: React.FC<ParallaxProps> = ({ className, title }) => (
  <>
    <div className={`${className} flex items-center justify-center w-screen`}></div>
    {/* <blockquote className="bg-black font-serif text-center text-white md:p-8">
        <p className="font-bold italic text-3xl">
          &ldquo;Large, bold pull quote. Hats. Very good.&rdquo;
        </p>
      </blockquote> */}
    <div className="absolute mx-auto ">
      <div className="text-center">
        <p className="text-white font-secular font-bold lg:text-7xl md:text-5xl text-5xl px-14">
          {title}
        </p>
      </div>
    </div>
  </>
);

export { Parallax };
import { COMPANY } from "@/constants/general";
import React from "react";

const TitleSection: React.FC = () => (
  <>
    <div className="parallax-beer-image">
      <div className="flex justify-center parallax-beer-image mx-auto items-center">
        <div className="w-screen flex justify-center mx-auto parallax-beer-image items-center px-16">
          <p className="lg:text-6xl md:text-5xl text-4xl text-white text-center justify-center flex mx-auto font-secular">Welcome to {COMPANY}</p>
        </div>
      </div>
    </div>
  </>
);

export { TitleSection };


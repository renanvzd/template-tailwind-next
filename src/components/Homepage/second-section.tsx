import { COMPANY } from "@/constants/general";
import React from "react";

const FirstSectionText: React.FC = () => (
  <>
    <div className="w-full flex justify-center mx-auto items-center">
      <div className="flex justify-center mx-auto items-center">
        <div className="flex justify-center mx-auto items-center px-16">
          <p className="lg:text-8xl md:text-7xl text-5xl text-white text-center justify-center flex mx-auto font-secular">Welcome to {COMPANY}</p>
        </div>
      </div>
    </div>
  </>
);

export { FirstSectionText };


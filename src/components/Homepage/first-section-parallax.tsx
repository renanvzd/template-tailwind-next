import { COMPANY } from "@/constants/general";
import React from "react";
import { FirstSectionText } from "./first-section-text";

const FirstSectionParallaxHomePage: React.FC = () => (
  <>
    <div className="h-screen w-full">
      <FirstSectionText />
      <div className="parallax-container">
        <div className="parallax-image ">
        </div>
        <div className="parallax-content">
        </div>
      </div>
    </div>
  </>
);

export { FirstSectionParallaxHomePage };

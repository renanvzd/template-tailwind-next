import { COMPANY } from "@/constants/general";
import React from "react";
import { FirstSectionText } from "./first-section-text";

interface FirstSectionParallaxHomePageProps {
  className?: string;
}

const FirstSectionParallaxHomePage: React.FC<FirstSectionParallaxHomePageProps> = ({ className }) => (
  <>
    <div className="h-screen w-full">
      <FirstSectionText />
      <div className="parallax-container">
        <div className={`parallax-box-image ${className}`}>
        </div>
        <div className="parallax-content">
        </div>
      </div>
    </div>
  </>
);

export { FirstSectionParallaxHomePage };

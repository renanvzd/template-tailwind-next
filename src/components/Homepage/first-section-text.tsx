import { COMPANY } from "@/constants/general";
import React from "react";

const FirstSectionText: React.FC = () => (
  <>
    <div className="w-full h-[50vh] flex justify-center mx-auto items-center">
      <div className="flex justify-center mx-auto items-center">
        <div className="flex justify-center mx-auto items-center">
          <p className="text-6xl text-white text-center justify-center flex mx-auto">Welcome to {COMPANY}</p>
        </div>
      </div>
    </div>
  </>
);

export { FirstSectionText };


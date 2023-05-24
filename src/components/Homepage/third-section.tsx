import Image from "next/image";
import React from "react";
import Food from "@/assets/images/fishandchips.jpg"

const ThirdSection: React.FC = () => (
  <>
    <div className="w-full h-full mt-10 mb-20 flex justify-center mx-auto items-center">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-14 gap-8 px-10">
        <div className="flex flex-col mx-auto justify-center rounded-md">
          <Image src={Food} alt="Food" className="rounded-md" />
          <p className="text-center lg:pt-14 md:pt-8 pt-6 lg:pb-0 pb-6 font-secular lg:text-7xl md:text-5xl text-4xl text-blue-950">Classic</p>
        </div>
        <div className="flex flex-col mx-auto justify-center rounded-md">
          <Image src={Food} alt="Food" className="rounded-md" />
          <p className="text-center lg:pt-14 md:pt-8 pt-6 lg:pb-0 pb-6 font-secular lg:text-7xl md:text-5xl text-4xl text-blue-950">Classic</p>
        </div>
        <div className="flex flex-col mx-auto justify-center rounded-md">
          <Image src={Food} alt="Food" className="rounded-md" />
          <p className="text-center lg:pt-14 md:pt-8 pt-6 lg:pb-0 pb-0 font-secular lg:text-7xl md:text-5xl text-4xl text-blue-950">Classic</p>
        </div>
      </div>

    </div>
  </>
);

export { ThirdSection };


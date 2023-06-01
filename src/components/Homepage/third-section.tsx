import Image from "next/image";
import React from "react";
import Food from "@/assets/images/food-menu.jpg"
import Beer from "@/assets/images/beer-menu.jpg"
import Link from "next/link";

const ThirdSection: React.FC = () => (
  <>
    <div className="w-full h-full mt-10 mb-20 flex justify-center mx-auto items-center md:pb-10 pb-0">
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-14 gap-8 px-10">
        <div className="flex flex-col mx-auto justify-center rounded-md">
          <Link href={"/page-two"}>
            <Image src={Food} alt="Food" className="rounded-md w-full md:h-[300px] h-[250px]" />
            <p className="text-center lg:pt-10 md:pt-8 pt-6 lg:pb-0 pb-3 font-secular lg:text-7xl md:text-5xl text-4xl text-blue-950">Food</p>
          </Link>
        </div>
        <div className="flex flex-col mx-auto justify-center rounded-md">
          <Link href={"/page-two"}>
            <Image src={Beer} alt="Food" className="rounded-md w-full md:h-[300px] h-[250px]" />
            <p className="text-center lg:pt-10 md:pt-8 pt-6 lg:pb-0 pb-3 font-secular lg:text-7xl md:text-5xl text-4xl text-blue-950">Drinks</p>
          </Link>
        </div>
      </div>

    </div>
  </>
);

export { ThirdSection };


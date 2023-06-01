import React from "react";
// import Image from "next/image";
// import Food from "@/assets/images/fishandchips.jpg"

const MenuList: React.FC = () => (
  <>
    {/* <div className="w-full h-full mt-10 mb-20 flex justify-center mx-auto items-center">
      <div className="flex flex-col h-full">
        <div className="flex flex-col h-full w-screen ">
          <div className="flex flex-col mx-auto justify-center items-center lg:px-16 md:px-16 px-4 lg:w-[60%] w-[60%] leading-loose border-b pb-10 border-gray-400">
            <p className="text-4xl text-black lg:pt-4 pt-5 font-bold">First Subtitle</p>
          </div>
          <div className="flex w-[70%] bg-red-300 mx-auto lg:justify-around md:justify-between">
            <div className="w-[50%] bg-blue-300">
              <div className="flex ">
                <p>Food</p>
                <p>14.00</p>
              </div>
              <div>
                <p>Description</p>
              </div>
              <div className="flex pt-10">
                <p>Food</p>
                <p>14.00</p>
              </div>
              <div>
                <p>Description</p>
              </div>
            </div>
            <div className="w-[50%] bg-blue-500">
              <div className="flex">
                <p>Food</p>
                <p>14.00</p>
              </div>
              <div>
                <p>Description</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <div className="w-full h-full mt-0 mb-20 flex flex-col justify-center mx-auto items-center">
      <p className="md:text-6xl text-5xl md:pb-10 pb-12 lg:pt-0 pt-16">Food</p>
      <div className="lg:w-[70%] md:w-full mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-5  gap-x-8 lg:px-5 md:px-8 px-4">
        <div className="w-full flex mx-auto justify-between rounded-md ">
          <div className="flex flex-col w-full md:pt-8 px-4">
            {/* <Image src={Food} alt="Food" className="rounded-md pb-5" /> */}
            <div className="flex items-center justify-between border-b border-gray-400 pb-2 bg-gray-100 p-2">
              <p className="md:text-3xl text-xl ">Food</p>
              <p className="md:text-3xl text-xl">£14.00</p>
            </div>
            <div className="flex justify-between bg-gray-200 p-4 rounded-b-md h-full">
              <p className="md:text-xl text-lg">80% rump 20% flank Scottish beef patty served in a demi-brioche bun, shredded lettuce, red onion relish, pickles and house chips.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex mx-auto justify-between rounded-md ">
          <div className="flex flex-col w-full pt-8 px-4">
            <div className="flex items-center justify-between border-b border-gray-400 pb-2 bg-gray-100 p-2">
              <p className="md:text-3xl text-xl ">Food</p>
              <p className="md:text-3xl text-xl">£14.00</p>
            </div>
            <div className="flex justify-between bg-gray-200 p-4 rounded-b-md h-full">
              <p className="md:text-xl text-lg">Free-range Yorkshire reared herb fed chicken breast, brined in house to ensure a moist tasty burger, served with shredded lettuce, honey & mustard mayonnaise and house chips.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex mx-auto justify-between rounded-md ">
          <div className="flex flex-col w-full pt-8 px-4">
            <div className="flex items-center justify-between border-b border-gray-400 pb-2 bg-gray-100 p-2">
              <p className="md:text-3xl text-xl ">Food</p>
              <p className="md:text-3xl text-xl">£14.00</p>
            </div>
            <div className="flex justify-between bg-gray-200 p-4 rounded-b-md h-full">
              <p className="md:text-xl text-lg">80% rump 20% flank Scottish beef patty served in a demi-brioche bun, shredded lettuce, red onion relish, pickles with your choice of mature cheddar, stilton or emmental and house chips.</p>
            </div>
          </div>
        </div>
        <div className="w-full flex mx-auto justify-between rounded-md ">
          <div className="flex flex-col w-full pt-8 px-4">
            <div className="flex items-center justify-between border-b border-gray-400 pb-2 bg-gray-100 p-2">
              <p className="md:text-3xl text-xl ">Food</p>
              <p className="md:text-3xl text-xl">£14.00</p>
            </div>
            <div className="flex justify-between pt-4 p-4 rounded-b-md bg-gray-200 h-full">
              <p className="md:text-xl text-lg">Free-range Yorkshire reared herb fed chicken breast, rubbed in house with cajun spices, served with smoked streaky bacon, avocado, baby spinach, mayonnaise, gruyere cheese and house chips.Free-range Yorkshire reared herb fed chicken breast, rubbed in house with cajun spices, served with smoked streaky bacon, avocado, baby spinach, mayonnaise, gruyere cheese and house chips.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
);

export { MenuList };


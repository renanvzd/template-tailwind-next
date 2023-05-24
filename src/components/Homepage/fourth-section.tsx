import React from "react";

const FourthSection: React.FC = () => (
  <>
    <div className="w-full h-full mt-10 mb-20 flex justify-center mx-auto items-center">
      <div className="flex flex-col h-full">
        <div className="h-full ">
          <div className="flex flex-col mx-auto justify-center items-center lg:px-16 md:px-16 px-4 lg:w-[60%] leading-loose">
            <p className="text-4xl text-black lg:pt-4 pt-5 font-bold">Gallery</p>
            <p className="pt-5 text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
          <div className="flex flex-col mx-auto justify-center items-center lg:px-16 md:px-16 px-4 pt-10 lg:w-[45%] leading-loose">
            <p className="text-4xl text-black lg:pt-4 pt-5 font-bold">Second Subtitle</p>
            <p className="pt-5 text-center text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export { FourthSection };


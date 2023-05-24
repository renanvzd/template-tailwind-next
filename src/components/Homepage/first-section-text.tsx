import React from "react";

const FirstSectionText: React.FC = () => (
  <>
    <div className="w-full h-full  flex justify-center mx-auto items-center">
      <div className="flex flex-col h-full">
        <div className="h-full pt-6 ">
          <div className="flex flex-col mx-auto justify-center items-center lg:px-16 md:px-16 px-4 border-b border-black pb-10 border-x-8 lg:w-[80%]">
            <blockquote className="font-serif text-center text-black md:p-8">
              <p className="font-bold italic text-2xl">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&rdquo;
              </p>
            </blockquote>
            <p className="text-4xl text-black lg:pt-4 pt-5">Subtitle</p>
            <p className="pt-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div className="h-64 flex flex-col md:my-10 my-8">
          <div className="flex h-full ">
            <div className="flex items-center justify-center mx-auto px-16">
              <p className="lg:text-5xl md:text-4xl text-3xl text-black text-center justify-center flex mx-auto font-secular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export { FirstSectionText };


import React from "react";
import Image from "next/image";
import { COMPANY, FACEBOOK, INSTAGRAM, YOUTUBE, ADDRESS, CITY, EMAIL, PHONE } from "@/constants/general";
import FacebookImage from "@/assets/images/Facebook.svg"
import YoutubeImage from "@/assets/images/Youtube-logo.svg"
import InstagramImage from "@/assets/images/Instagram.svg"

const FifthSection: React.FC = () => (
  <>
    <div className="w-full h-full  flex justify-center mx-auto mb-10 mt-8 items-center">
      <div className="flex flex-col h-full">
        <div className="h-full pt-6 ">
          <div className="flex mx-auto justify-between lg:w-[100%]">
            <div className="flex flex-col mx-auto md:px-16 px-4 pb-10 lg:w-[100%] ">
              <p className="text-4xl text-black text-center">Contact Details</p>
              <p className="text-xl pt-5 text-left">{COMPANY}</p>
              <p className="text-xl pt-2 text-left">{ADDRESS}</p>
              <p className="text-xl pt-2 text-left">{CITY}</p>
              <p className="text-xl pt-2 text-left">{PHONE}</p>
              <p className="text-xl pt-2 text-left">{EMAIL}</p>
              <div className="flex items-center gap-x-6 text-white mt-6">
                <a href={FACEBOOK}>
                  <Image src={FacebookImage} alt="Facebook" className="md:h-8 md:w-8 h-10 w-10" />
                </a>
                <a href={YOUTUBE}>
                  <Image src={YoutubeImage} alt="Youtube" className="md:h-9 md:w-10 h-10 w-10" />
                </a>
                <a href={INSTAGRAM}>
                  <Image src={InstagramImage} alt="Instagram" className="md:h-8 md:w-8 h-10 w-10" />
                </a>

              </div>
            </div>
            <div className=" flex flex-col mx-auto md:px-16 px-4 pb-10 lg:w-[100%]">
              <p className="text-4xl text-black text-center">Opening hours</p>
              <p className="text-xl pt-5 text-left"><b>Monday – Saturday:</b> 12:00 – 23:00</p>
              <p className="text-xl pt-5 text-left"><b>Sunday:</b> 12:00 – 23:00</p>
            </div>
          </div>
          {/* <div className="flex mx-auto justify-between lg:w-[60%]">
            <div className="flex flex-col mx-auto justify-center items-center lg:px-16 md:px-16 px-4 border-b pb-10 lg:w-[60%] lg:pt-4 pt-5">
              <p className="text-4xl text-black">Subtitle</p>
              <p className="pt-5 text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="flex flex-col mx-auto justify-center items-center lg:px-16 md:px-16 px-4 border-b pb-10 lg:w-[60%]">
              <p className="text-4xl text-black">Subtitle</p>
              <p className="pt-5 text-justify">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </>
);

export { FifthSection };


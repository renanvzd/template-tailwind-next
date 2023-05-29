import React, { useState } from "react";
import Carousel from "./carousel";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import Food from "@/assets/images/fishandchips.jpg"


interface ModalProps {
  modalTitle: string;
}

export default function Modal({ modalTitle }: ModalProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="pt-10">
        <div className="flex mx-auto justify-center">
          <button className="w-80 h-80" onClick={() => setShowModal(true)}>
            <Image src={Food} alt="Food" className="rounded-md pb-5" />
          </button>
        </div>

        {/* </button> */}
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="w-screen relative my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      {modalTitle}
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <AiOutlineCloseCircle color="black" />
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <Carousel />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
}
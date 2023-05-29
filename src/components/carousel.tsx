import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";
import Food from "@/assets/images/fishandchips.jpg";

export default function SliderControlsInside() {
  useEffect(() => {
    let slider: any = null;

    const initializeSlider = () => {
      slider = new Glide(".glide-01", {
        type: "slider",
        focusAt: "center",
        perView: 1,
        autoplay: 3000,
        animationDuration: 700,
        gap: 0,
        classes: {
          activeNav: "bg-red-300",
        },
      });

      slider.mount();
    };

    const destroySlider = () => {
      if (slider) {
        slider.destroy();
      }
    };

    const glideElement = document.querySelector(".glide-01");
    if (glideElement) {
      initializeSlider();

      return () => {
        destroySlider();
      };
    }

    return () => { }; // Return an empty function if the glideElement is not found

  }, []);

  return (
    <>
      {/* Component: Slider with controls inside */}
      <div className="relative w-full glide-01">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap backface-visibility-hidden transform-style-preserve-3d touch-action-pan-y will-change-transform relative flex w-full overflow-hidden p-0">
            <li>
              <Image src={Food} alt="Food" className="rounded-md pb-5" />
            </li>
            <li>
              <Image src={Food} alt="Food" className="rounded-md pb-5" />
            </li>
          </ul>
        </div>
        {/* Controls */}
        <div className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2" data-glide-el="controls">
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-10 lg:w-10"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <title>prev slide</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-10 lg:w-10"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
              <title>next slide</title>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
      {/* End Slider with controls inside */}
    </>
  );
}

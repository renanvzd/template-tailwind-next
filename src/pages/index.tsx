import { Layout } from "@/components/Layouts/layout";
import { Parallax } from "@/components/Homepage/parallax";
import { FirstSectionText } from "@/components/Homepage/first-section-text";
import { COMPANY } from "@/constants/general";
import { SecondSectionText } from "@/components/Homepage/second-section-text";
import { ThirdSection } from "@/components/Homepage/third-section";
import { FourthSection } from "@/components/Homepage/fourth-section";
import { FifthSection } from "@/components/Homepage/fifth-section";

const LandingPage = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <div className="w-full flex justify-center items-center">
          <Parallax title={`Welcome to ${COMPANY}`} className="parallax-home-first-section h-[100vh]" />
        </div>
        <div className="w-full">
          <FirstSectionText />
        </div>

        <div className="w-full flex mx-auto justify-center items-center">
          <Parallax title={"First Section"} className="parallax-beer-background lg:h-[30vh] h-[20vh]" />
        </div>
        <div className="w-full">
          <SecondSectionText />
        </div>

        <div className="w-full flex mx-auto justify-center items-center">
          <Parallax title={"Gallery"} className="parallax-beer-background lg:h-[30vh] h-[20vh]" />
        </div>
        <div className="w-full">
          <ThirdSection />
        </div>

        <div className="w-full flex mx-auto justify-center items-center">
          <Parallax title={"Testimonials"} className="parallax-beer-background lg:h-[30vh] h-[20vh]" />
        </div>
        <div className="w-full">
          <FourthSection />
        </div>

        <div className="w-full flex mx-auto justify-center items-center">
          <Parallax title={"Get In Touch"} className="parallax-beer-background lg:h-[30vh] h-[20vh]" />
        </div>
        <div className="w-full">
          <FifthSection />
        </div>
      </Layout>
    </>
  );
};

export default LandingPage;

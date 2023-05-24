import { Layout } from "@/components/Layouts/layout";
import { Parallax } from "@/components/Homepage/parallax";
import { HeaderHomepage } from "@/components/Homepage/header";
import { FirstSectionText } from "@/components/Homepage/first-section-text";
import { TitleSection } from "@/components/title-section";
import { COMPANY } from "@/constants/general";

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
        <HeaderHomepage />
        <div className="w-full flex mx-auto justify-center items-center">
          <Parallax title={"First Section"} className="parallax-beer-background lg:h-[30vh] h-[20vh]" />
        </div>
      </Layout>
    </>
  );
};

export default LandingPage;

import { Layout } from "@/components/Layouts/layout";
import { Parallax } from "@/components/Homepage/parallax";
import { HeaderHomepage } from "@/components/Homepage/header";
import { FirstSectionText } from "@/components/Homepage/first-section-text";
import { TitleSection } from "@/components/title-section";

const LandingPage = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <FirstSectionText />
        <Parallax className="parallax-home-first-section h-screen" />

        <HeaderHomepage />
        <div className="lg:h-[30vh] h-[20vh] flex mx-auto justify-center items-center">
          <TitleSection />
          <Parallax className="parallax-beer-background" />
        </div>
      </Layout>
    </>
  );
};

export default LandingPage;

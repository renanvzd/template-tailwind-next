import { Layout } from "@/components/Layouts/layout";
import { FirstSectionParallaxHomePage } from "@/components/Homepage/first-section-parallax";
import { HeaderHomepage } from "@/components/Homepage/header";

const LandingPage = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <FirstSectionParallaxHomePage className="parallax-home-first-section"
        />
        <HeaderHomepage />
      </Layout>
    </>
  );
};

export default LandingPage;

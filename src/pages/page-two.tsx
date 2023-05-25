import { FirstSectionText } from "@/components/Homepage/first-section-text";
import { Parallax } from "@/components/Homepage/parallax";
import { Layout } from "@/components/Layouts/layout";
import { FirstSectionMenu } from "@/components/Menu/first-section-menu";
import { MenuList } from "@/components/Menu/menu-list";

const Menu = () => {
  return (
    <>
      <Layout
        title=""
        description=""
        content=""
      >
        <div className="w-full flex justify-center items-center">
          <Parallax title="Menu" className="parallax-menu h-[55vh]" />
        </div>
        <div className="w-full">
          <FirstSectionMenu />
        </div>
        <div className="w-full">
          <MenuList />
        </div>
      </Layout>
    </>
  );
};

export default Menu;

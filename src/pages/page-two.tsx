import { useState } from 'react';
import { Parallax } from "@/components/Homepage/parallax";
import { Layout } from "@/components/Layouts/layout";
import { FirstSectionMenu } from "@/components/Menu/first-section-menu";
import { MenuDrinkList } from "@/components/Menu/menu-drink-list";
import { MenuList } from "@/components/Menu/menu-food-list";

const Menu = () => {
  const [showFoodMenu, setShowFoodMenu] = useState(true);

  const handleFoodClick = () => {
    setShowFoodMenu(true);
  };

  const handleDrinksClick = () => {
    setShowFoodMenu(false);
  };

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
        <div className="w-full flex gap-10 mx-auto justify-center md:mb-12">
          <button className={`${showFoodMenu ? "bg-green-200" : "bg-gray-100"} py-3 px-10 rounded-md`} onClick={handleFoodClick}>
            <p className="text-xl font-bold">Food</p>
          </button>
          <button className={`${showFoodMenu ? "bg-gray-100" : "bg-green-200"} py-3 px-10 rounded-md`} onClick={handleDrinksClick}>
            <p className="text-xl font-bold">Drinks</p>
          </button>
        </div>
        <div className="w-full lg:mt-20">
          {showFoodMenu ? <MenuList /> : <MenuDrinkList />}
        </div>
      </Layout>
    </>
  );
};

export default Menu;

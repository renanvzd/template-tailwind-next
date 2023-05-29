import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";

type MenuLinksItems = {
  menuTitle: string;
  href: string;
  icon: JSX.Element;
};

export const MenuHeader: MenuLinksItems[] = [
  {
    menuTitle: 'Home',
    href: '/',
    icon: <RxDashboard />,
  },
  {
    menuTitle: 'Menu',
    href: '/page-two',
    icon: <AiOutlineMail />,
  },
  {
    menuTitle: 'Gallery',
    href: '/gallery',
    icon: <AiOutlineMail />,
  },
]
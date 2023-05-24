import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import Logo from "@/assets/images/fourleaf.svg";
import { MenuHeader } from './header-menus';
import { COMPANY } from '@/constants/general';


export function Header() {
  const [classOn, setClassOn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menusHeader = MenuHeader;

  const router = useRouter();
  const currentPath = useMemo(() => router?.pathname, [router]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 z-40 w-full">
        <div className={`flex items-center justify-between lg:h-32 h-20 mx-auto max-w-full md:px-3 xl:px-8 ${isScrolled ? 'bg-black lg:h-20' : ''
          } transition-bg-color-header`}>
          <div className="flex items-center w-auto justify-center mr-5">
            {/* <Image className="w-10 h-10 mr-2" src={Logo} alt="Four Leaf" width={20} height={20} /> */}
            <div className="flex items-center justify-center flex-grow">
              <Link href="/">
                <span className="text-3xl sm:text-4xl lg:text-4xl font-bold ml-5 md:ml-8 text-white items-baseline justify-center ">{COMPANY}</span>
              </Link>
            </div>
          </div>


          <div className={classOn ? "menuSectionOn" : "menuSection"} onClick={() => setClassOn(!classOn)}>
            <div className="menuToggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>

            <nav className="listItems lg:flex lg:items-center lg:justify-end lg:flex-1" id="mobile-menu">
              <ul className="flex flex-col lg:flex-row gap-12 lg:gap-8">
                {menusHeader.map((item, index) =>
                  <li key={index}>
                    <Link href={item.href}>
                      <div
                        className={`flex items-center ${currentPath === `${item.href}`
                          ? "active-menu-header"
                          : "inactive-menu-header"
                          }`}
                      >
                        <span className="text-white-400 hover:text-white">
                          {item.menuTitle}
                        </span>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
              <div className='flex w-full mx-auto justify-center lg:ml-12 mt-10 lg:mt-0'>
                <Link href="/">
                  <div className="flex items-baseline w-auto sm:w-28 justify-center bg-green-200 rounded-md ml-0">
                    <div className="flex items-baseline justify-center flex-grow lg:px-2 py-2">
                      <button className="p-2 lg:p-0 lg:py-1 text-2xl lg:text-xl items-baseline place-items-start font-bold text-black-400">Lisbon</button>
                    </div>
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header >
    </>
  )
}
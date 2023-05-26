import Image from "next/image";
import { COMPANY, FACEBOOK, INSTAGRAM, YOUTUBE, WHATSAPP_NUMBER } from "@/constants/general";
import { Whatsapp } from "@/components/whatsapp";
import FacebookImage from "@/assets/images/Facebook.svg"
import YoutubeImage from "@/assets/images/Youtube-logo.svg"
import InstagramImage from "@/assets/images/Instagram.svg"

const Footer: React.FC = () => {
  const footerNavs = [
    {
      label: "Resources",
      items: [
        {
          href: 'javascript:void()',
          name: 'Contact'
        },
        {
          href: 'javascript:void()',
          name: 'Support'
        },
        {
          href: 'javascript:void()',
          name: 'Documentation'
        },
        {
          href: 'javascript:void()',
          name: 'Pricing'
        },
      ],
    },
    {
      label: "About",
      items: [
        {
          href: 'javascript:void()',
          name: 'Terms'
        },
        {
          href: 'javascript:void()',
          name: 'License'
        },
        {
          href: 'javascript:void()',
          name: 'Privacy'
        },
        {
          href: 'javascript:void()',
          name: 'About US'
        },
      ]
    },
    // {
    //   label: "Company",
    //   items: [
    //     {
    //       href: 'javascript:void()',
    //       name: 'Partners'
    //     },
    //     {
    //       href: 'javascript:void()',
    //       name: 'Team'
    //     },
    //     {
    //       href: 'javascript:void()',
    //       name: 'Careers'
    //     },
    //   ],
    // }
  ]

  return (
    <>
      <footer className="pt-10 bg-black">
        {/* <Whatsapp phone={WHATSAPP_NUMBER} /> */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex mx-auto justify-center items-center md:flex w-full">
            <div className="max-w-lg">
              <h3 className="text-2xl font-bold text-white">
                {COMPANY}
              </h3>
            </div>
            {/* <div className="flex-1 mt-6 md:mt-0">
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
                <div className="relative">
                  <svg className="w-6 h-6 text-white absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-3 py-2 text-white bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow">
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
          <div className="mx-auto flex justify-center mt-10 space-y-0  md:space-y-0 ">
            <div className="md:gap-24 gap-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center text-center">
              {
                footerNavs.map((item, idx) => (
                  <ul
                    className="space-y-4 text-white"
                    key={idx}
                  >
                    <h4 className="text-white font-semibold sm:pb-0">
                      {item.label}
                    </h4>
                    {
                      item.items.map(((el, idx) => (
                        <li key={idx}>
                          <a
                            href={el.href}
                            className="hover:text-white duration-150"

                          >
                            {el.name}
                          </a>
                        </li>
                      )))
                    }
                  </ul>
                ))
              }
            </div>
          </div>
          <div className="flex mt-10 py-10 border-t items-center">
            <div className=" w-full flex md:flex-row flex-col mx-auto md:justify-between justify-center">
              <div className="flex items-center justify-center mt-6 ">
                <p className="flex text-white items-center">© 2023 - All rights reserved.</p>
              </div>
              <div className="flex items-center justify-center gap-x-6 text-white mt-6 ">
                <a href={FACEBOOK}>
                  <Image src={FacebookImage} alt="Facebook" className="md:h-8 md:w-8 h-10 w-10" />
                </a>
                <a href={YOUTUBE}>
                  <Image src={YoutubeImage} alt="Youtube" className="md:h-9 md:w-10 h-10 w-10" />
                </a>
                <a href={INSTAGRAM}>
                  <Image src={InstagramImage} alt="Instagram" className="md:h-8 md:w-8 h-10 w-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export { Footer };

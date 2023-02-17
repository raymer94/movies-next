import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import heart3 from "../../../../public/heart-3.svg";
import activeHeart from "../../../../public/heart-active.svg";
import Image from 'next/image';

interface IProps {
    children: ReactElement;
  }

const DrawerMenu = ({ children }: IProps) => {
  const router = useRouter();
  const path = router.pathname.split("/")[1];

  return (
    <>
      <aside className=" w-1/6 py-10 pl-10  min-w-min border-r border-gray-300 dark:border-zinc-700  hidden md:block ">
        <div>
          <div className=" font-bold text-lg flex items-center gap-x-3">
            {/* <svg className="h-8 w-8 fill-red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15.5v-7c0-.41.47-.65.8-.4l4.67 3.5c.27.2.27.6 0 .8l-4.67 3.5c-.33.25-.8.01-.8-.4Zm11.96-4.45c.58 6.26-4.64 11.48-10.9 10.9 -4.43-.41-8.12-3.85-8.9-8.23 -.26-1.42-.19-2.78.12-4.04 .14-.58.76-.9 1.31-.7v0c.47.17.75.67.63 1.16 -.2.82-.27 1.7-.19 2.61 .37 4.04 3.89 7.25 7.95 7.26 4.79.01 8.61-4.21 7.94-9.12 -.51-3.7-3.66-6.62-7.39-6.86 -.83-.06-1.63.02-2.38.2 -.49.11-.99-.16-1.16-.64v0c-.2-.56.12-1.17.69-1.31 1.79-.43 3.75-.41 5.78.37 3.56 1.35 6.15 4.62 6.5 8.4ZM5.5 4C4.67 4 4 4.67 4 5.5 4 6.33 4.67 7 5.5 7 6.33 7 7 6.33 7 5.5 7 4.67 6.33 4 5.5 4Z"></path>
            </svg> */}
            <svg className="h-8 w-8 fill-red-600" fill="#000000" version="1.1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M479.4 320.2L106 320c-4.3 0-7.6 3.7-7.1 8l66 553c5.3 44.8 43.4 78.6 88.5 78.6h299.2c45.2 0 83.3-33.9 88.5-78.8L704.9 332c0.7-6.4-4.3-12-10.7-12l-214.8 0.2z" fill="#EF0303"></path><path d="M106.1 320s-26.5-55.7 22.9-63.2c6.4-1 11.4-6.1 12-12.5 1.4-14.5 8.4-38.1 37.9-44.6 7.4-1.6 12.1-8.7 10.9-16-3.8-22.9-2.8-64.6 57.5-57.3 6.2 0.7 12.2-2.6 14.8-8.2 12.1-26.6 53.3-93 143.8-25.3 4.4 3.3 10.2 3.8 15.1 1.4 19.2-9.4 67.1-28.6 93 25.3 2.3 4.9 7.4 8 12.9 8 19.5 0.1 62.4 6.9 55.8 64.2 0 4 63.9-10 65.3 52 0.2 6.6 4.9 12.2 11.5 13.5 16.2 3.2 43.2 13.6 43.9 48.4 0.2 7.9-6.3 14.3-14.3 14.3l-577.9 0.2M768.1 895.6s-56.8-5-42.5-63.9c0 0-28.4-63.9 42.5-63.9 0 0 8.9-67.8 64-26.1 2.8 0 74.5-29 64 44 0-1.3 51.2-7.3 31.8 46.1 0-2.7 31.1 63.9-32.4 63.9 0 0 0.5 52-63.5 32.7 0.2-0.1-57.3 20.6-63.9-32.8z" fill="#f4ea29"></path><path d="M372.2 956.5l-1.8-633.2c0-1.7 1.4-3.1 3-3.1l53.9-0.2c1.7 0 3.1 1.4 3.1 3l1.8 633.2c0 1.7-1.4 3.1-3 3.1l-53.9 0.2c-1.7 0.1-3.1-1.3-3.1-3zM244.1 957.4l-1.8-634.9c0-1.2 1-2.2 2.2-2.2l55.5-0.2c1.2 0 2.2 1 2.2 2.2l1.8 634.9c0 1.2-1 2.2-2.2 2.2l-55.5 0.2c-1.2 0-2.2-1-2.2-2.2zM498.7 956.3l-1.8-632.7c0-1.8 1.5-3.3 3.3-3.3l53.4-0.2c1.8 0 3.3 1.5 3.3 3.3l1.8 632.7c0 1.8-1.5 3.3-3.3 3.3l-53.4 0.2c-1.8 0-3.3-1.5-3.3-3.3z" fill="#FFFFFF"></path></g></svg>
            <div className="tracking-wide dark:text-white">Free Movies<span className="text-red-600">.</span></div>
          </div>

          {/* <!-- Menu --> */}
          <div className="mt-12 flex flex-col gap-y-4 text-gray-500 fill-gray-500 text-sm">
            <div className="text-gray-400/70  font-medium uppercase">Menu</div>
            <a className={`flex items-center space-x-2  hover:font-semibold dark:hover:text-white ${path === "home" ? "py-1 dark:text-white font-semibold border-r-4 border-r-red-600 pr-20" : ""}`} href="/home">
              {/* <svg className={`h-5 w-5 ${path === "home" ? "fill-red-600" : ""}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                <path d="M5 22h14v0c1.1 0 2-.9 2-2v-9 0c0-.27-.11-.53-.29-.71l-8-8v0c-.4-.39-1.02-.39-1.41 0l-8 8h0c-.2.18-.3.44-.3.71v9 0c0 1.1.89 2 2 2Zm5-2v-5h4v5Zm-5-8.59l7-7 7 7V20h-3v-5 0c0-1.11-.9-2-2-2h-4v0c-1.11 0-2 .89-2 2v5H5Z"></path>
              </svg> */}
              <svg className={`h-5 w-5 ${path === "home" ? "fill-red-600" : ""}`} fill="#000000" id="Layer_1" stroke="#000000" version="1.1" viewBox="0 -13.54 122.88 122.88" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M12.14,0H32.8h29.43h28.8h19.71c3.34,0,6.38,1.37,8.58,3.56c2.2,2.2,3.56,5.24,3.56,8.58v7.13v57.25v7.09 c0,3.34-1.37,6.38-3.56,8.58c-2.2,2.2-5.24,3.56-8.58,3.56h-19.2c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04 H62.74c-0.16,0.03-0.33,0.04-0.51,0.04c-0.17,0-0.34-0.01-0.51-0.04H33.31c-0.16,0.03-0.33,0.04-0.51,0.04 c-0.17,0-0.34-0.01-0.51-0.04H12.14c-3.34,0-6.38-1.37-8.58-3.56S0,86.95,0,83.61v-7.09V19.27v-7.13C0,8.8,1.37,5.76,3.56,3.56 C5.76,1.37,8.8,0,12.14,0L12.14,0z M55.19,31.24l20.53,14.32c0.32,0.2,0.61,0.48,0.84,0.81c0.92,1.33,0.58,3.14-0.74,4.06 L55.37,64.57c-0.5,0.41-1.15,0.66-1.85,0.66c-1.62,0-2.93-1.31-2.93-2.93V33.63h0.01c0-0.58,0.17-1.16,0.52-1.67 C52.05,30.64,53.87,30.32,55.19,31.24L55.19,31.24z M93.95,79.45V89.9h16.78c1.73,0,3.3-0.71,4.44-1.85 c1.14-1.14,1.85-2.71,1.85-4.44v-4.16H93.95L93.95,79.45z M88.1,89.9V79.45H65.16V89.9H88.1L88.1,89.9z M59.31,89.9V79.45H35.73 V89.9H59.31L59.31,89.9z M29.87,89.9V79.45H5.85v4.16c0,1.73,0.71,3.3,1.85,4.44c1.14,1.14,2.71,1.85,4.44,1.85H29.87L29.87,89.9z M5.85,73.6H32.8h29.43h28.8h26V22.2h-26h-28.8H32.8H5.85V73.6L5.85,73.6z M88.1,16.35V5.85H65.16v10.49H88.1L88.1,16.35z M93.95,5.85v10.49h23.07v-4.2c0-1.73-0.71-3.3-1.85-4.44c-1.14-1.14-2.71-1.85-4.44-1.85H93.95L93.95,5.85z M59.31,16.35V5.85 H35.73v10.49H59.31L59.31,16.35z M29.87,16.35V5.85H12.14c-1.73,0-3.3,0.71-4.44,1.85c-1.14,1.14-1.85,2.71-1.85,4.44v4.2H29.87 L29.87,16.35z"></path> </g> </g></svg>
              <span>Home</span>
            </a>
            <a className={`flex items-center space-x-2 py-1  hover:font-semibold dark:hover:text-white ${path === "favorites" ? "py-1 dark:text-white font-semibold border-r-4 border-r-red-600 pr-20" : ""}`} href="/favorites">
              <svg className={`h-5 w-5 ${path === "favorites" ? "fill-red-600" : ""}`} fill="none" stroke="#f50000" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M60.732 29.7C41.107 29.7 22 39.7 22 67.41c0 27.29 45.274 67.29 74 94.89 28.744-27.6 74-67.6 74-94.89 0-27.71-19.092-37.71-38.695-37.71C116 29.7 104.325 41.575 96 54.066 87.638 41.516 76 29.7 60.732 29.7z"
              ></path></g></svg>
              <span>Favorites</span>
            </a>
          </div>
        </div>
        {/* <!-- /Menu --> */}

      </aside>
      <div className="flex-1 py-10 px-5 sm:px-10 ">
        <div className="mobile-menu">
          <header className=" font-bold text-lg flex items-center  gap-x-3 md:hidden mb-12 ">
            <svg className="h-8 w-8 fill-red-600" fill="#000000" version="1.1" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M479.4 320.2L106 320c-4.3 0-7.6 3.7-7.1 8l66 553c5.3 44.8 43.4 78.6 88.5 78.6h299.2c45.2 0 83.3-33.9 88.5-78.8L704.9 332c0.7-6.4-4.3-12-10.7-12l-214.8 0.2z" fill="#EF0303"></path><path d="M106.1 320s-26.5-55.7 22.9-63.2c6.4-1 11.4-6.1 12-12.5 1.4-14.5 8.4-38.1 37.9-44.6 7.4-1.6 12.1-8.7 10.9-16-3.8-22.9-2.8-64.6 57.5-57.3 6.2 0.7 12.2-2.6 14.8-8.2 12.1-26.6 53.3-93 143.8-25.3 4.4 3.3 10.2 3.8 15.1 1.4 19.2-9.4 67.1-28.6 93 25.3 2.3 4.9 7.4 8 12.9 8 19.5 0.1 62.4 6.9 55.8 64.2 0 4 63.9-10 65.3 52 0.2 6.6 4.9 12.2 11.5 13.5 16.2 3.2 43.2 13.6 43.9 48.4 0.2 7.9-6.3 14.3-14.3 14.3l-577.9 0.2M768.1 895.6s-56.8-5-42.5-63.9c0 0-28.4-63.9 42.5-63.9 0 0 8.9-67.8 64-26.1 2.8 0 74.5-29 64 44 0-1.3 51.2-7.3 31.8 46.1 0-2.7 31.1 63.9-32.4 63.9 0 0 0.5 52-63.5 32.7 0.2-0.1-57.3 20.6-63.9-32.8z" fill="#f4ea29"></path><path d="M372.2 956.5l-1.8-633.2c0-1.7 1.4-3.1 3-3.1l53.9-0.2c1.7 0 3.1 1.4 3.1 3l1.8 633.2c0 1.7-1.4 3.1-3 3.1l-53.9 0.2c-1.7 0.1-3.1-1.3-3.1-3zM244.1 957.4l-1.8-634.9c0-1.2 1-2.2 2.2-2.2l55.5-0.2c1.2 0 2.2 1 2.2 2.2l1.8 634.9c0 1.2-1 2.2-2.2 2.2l-55.5 0.2c-1.2 0-2.2-1-2.2-2.2zM498.7 956.3l-1.8-632.7c0-1.8 1.5-3.3 3.3-3.3l53.4-0.2c1.8 0 3.3 1.5 3.3 3.3l1.8 632.7c0 1.8-1.5 3.3-3.3 3.3l-53.4 0.2c-1.8 0-3.3-1.5-3.3-3.3z" fill="#FFFFFF"></path></g></svg>
            <div className="tracking-wide dark:text-white flex-1">Free Movie<span className="text-red-600">.</span></div>

          </header>

          <section>
            <nav className="flex space-x-6 text-gray-400 font-medium">
              <a className={`hover:text-gray-700 dark:hover:text-white ${path === "home" ? "dark:text-white" : ""}`} href="/home">Home</a>
              <a className={`hover:text-gray-700 dark:hover:text-white ${path === "favorites" ? "dark:text-white" : ""}`} href="/favorites">Favorites</a>
            </nav>
          </section>
        </div>

        {children}
      </div>
    </>
  );
};

export default DrawerMenu;
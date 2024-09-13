import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import { QueryContext } from "@/store/QueryContext";
import SearchInput from "./SearchInput";
import NavMenuIcon from "./NavMenuIcon";

const Navbar = () => {
  const { queryState } = useContext(QueryContext);
  const [navIconClick, setNavIconClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };


    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleNavIconClick() {
    setNavIconClick((prev) => !prev);
  }

  if (windowWidth === 0) return null; 

  return (
    <nav
      className={`${
        navIconClick && windowWidth < 640
          ? " h-full absolute top-0 left-0 "
          : "w-full h-[111.04px] flex justify-between items-center border-b border-gray-300 shadow-md"
      }`}
    >
      {(!navIconClick || windowWidth >= 640) && (
        <div
          className={`flex items-center ${
            queryState.isSearchPage ? "ml-16" : "md:ml-8 lg:ml-72"
          }`}
        >
          <Image
            width={220.91}
            height={62.26}
            src="/Logo.png"
            alt="Girman Technologies logo"
            className="w-32 h-10 pl-4 sm:w-[221px] sm:h-[62px]"
          />
        </div>
      )}

      {!queryState.isSearchPage && windowWidth < 640 && (
        <NavMenuIcon
          navIconClick={navIconClick}
          handleNavIconClick={handleNavIconClick}
        />
      )}
      {queryState.isSearchPage ? (
        <SearchInput />
      ) : (
        <ul
          className={`${
            navIconClick && windowWidth < 640
              ? "z-10 absolute w-screen flex flex-col items-center justify-center h-full transition-all duration-100 ease-in-out bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 gap-5"
              : "hidden sm:flex sm:text-[22.49px] sm:leading-[27.22px] sm:w-[525.5px] sm:md:gap-[42.17px] sm:gap-4 sm:justify-end md:justify-normal"
          }`}
        >
          {windowWidth >= 640 && (
            <li>
              <a
                href="/"
                target="_blank"
                className="text-[#3063E6] font-bold underline underline-offset-4"
              >
                SEARCH
              </a>
            </li>
          )}
          <li>
            <a href="https://www.girmantech.com/" target="_blank">
              WEBSITE
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/girmantech/" target="_blank">
              LINKEDIN
            </a>
          </li>
          <li>
            <a href="mailto:contact@girmantech.com" target="_blank">
              CONTACT
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

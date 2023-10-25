"use client";

import { useCallback, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

import data from "@/data";
import ThemeButton from "@/components/ThemeButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerBg, setHeaderBg] = useState(false);
  const [active, setActive] = useState("");
  const [mounted, setMounted] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`w-full fixed top-0 z-20 flex justify-center ${
        headerBg ? "bg-white dark:bg-slate-900" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-full py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg md:text-2xl font-bold text-indigo-900 dark:text-white">
            Portfolio
          </span>
        </div>
        <div className="flex gap-4">
          <ul
            className={`
            md:bg-transparent
            md:flex-row
            md:h-[56px]
            md:p-0
            md:space-x-10
            md:space-y-0
            md:static
            md:w-auto
            dark:text-gray-100
            absolute
            duration-300
            ease-in
            flex
            flex-col
            font-bold
            h-screen
            items-center
            justify-evenly
            text-gray-60
            text-indigo-900
            text-sm
            transition-all
            uppercase
            w-52
          ${isOpen ? " bg-slate-900 right-0 top-0 " : "right-[-490px]"}
          `}
          >
            {data.navbar.menu.map(({ label }, index) => (
              <li className="" key={index}>
                <a
                  className={`dark:hover:text-bright-pink hover:text-bright-pink ${
                    headerBg
                      ? "text-slate-900 dark:text-white"
                      : "dark:text-white text-slate-900 "
                  } ${active === label && "border-b-2 border-bright-pink"}`}
                  href={"#" + label.toLowerCase()}
                  onClick={() => setActive(label)}
                  rel="noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-7">
            <ThemeButton />
          </div>
          <div
            className="md:hidden cursor-pointer z-20 flex items-center mr-4"
            onClick={toggleOpen}
          >
            <FaBars className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

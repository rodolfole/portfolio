"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [toTop, setToTop] = useState(false);

  const handleScrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    let scrollTop = window.scrollY;
    scrollTop > 200 ? setToTop(true) : setToTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <div
      className="cursor-pointer hover:bg-bright-pink w-10 h-10 flex justify-center items-center transition duration-200"
      onClick={() => handleScrollTop()}
    >
      <FaArrowUp />
    </div>
  );
};

export default BackToTop;

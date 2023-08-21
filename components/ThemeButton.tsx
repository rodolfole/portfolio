"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="t flex items-center justify-around border border-slate-900 rounded-3xl relative md:top-4">
        <FaSun className={"h-4 w-4 text-slate-900"} />
        <FaMoon className={`h-4 w-4 text-slate-900`} />

        <div
          className="absolute bg-bright-pink cursor-pointer h-6 rounded-full w-6"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          style={{ left: resolvedTheme === "dark" ? 0 : 25 }}
        ></div>
      </div>
    </>
  );
};

export default ThemeButton;

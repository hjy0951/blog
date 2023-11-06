"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { RiMoonFill, RiQuestionMark, RiSunFill } from "react-icons/ri";

const ModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState<boolean>(
    Cookies.get("theme") === "dark"
  );

  const modeButtonHandler = () => {
    const themeToChange = !isDark ? "dark" : "light";
    Cookies.set("theme", themeToChange, { expires: 1000 });
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document?.documentElement.classList.add("dark");
    } else {
      document?.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  if (!mounted)
    return (
      <div className="p-1 rounded-md border">
        <RiQuestionMark size={24} />
      </div>
    );

  return (
    <motion.button
      className="p-1.5 rounded-md dark:text-white bg-sky-300 dark:bg-black"
      type="button"
      onClick={modeButtonHandler}
      whileTap={{ scale: 0.95, rotate: 25 }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        rotate: 360,
      }}
    >
      {isDark ? (
        <RiMoonFill size={22} color="#FFE400" />
      ) : (
        <RiSunFill size={22} color="#FF0000" />
      )}
    </motion.button>
  );
};

export default ModeButton;

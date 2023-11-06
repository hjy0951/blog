"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

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

  if (!mounted) return null;

  return (
    <button
      className="dark:text-white"
      type="button"
      onClick={modeButtonHandler}
    >
      Mode
    </button>
  );
};

export default ModeButton;

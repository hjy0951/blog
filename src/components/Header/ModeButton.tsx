"use client";
import React from "react";
import useDarkMode from "@/hooks/useDarkMode";

const ModeButton = () => {
  const [isDark, darkModeButtonHandler] = useDarkMode();
  return (
    <button
      className="dark:text-white"
      type="button"
      onClick={darkModeButtonHandler}
    >
      Mode
    </button>
  );
};

export default ModeButton;

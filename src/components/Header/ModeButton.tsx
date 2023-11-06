"use client";
import useDarkMode from "@/hooks/useDarkMode";
import React, { MouseEventHandler } from "react";

const ModeButton = () => {
  const [isDark, darkModeButtonHandler] = useDarkMode();
  return (
    <button
      className="dark:text-white"
      type="button"
      onClick={darkModeButtonHandler as MouseEventHandler<HTMLButtonElement>}
    >
      Mode
    </button>
  );
};

export default ModeButton;

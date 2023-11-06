import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const darkModeButtonHandler = () => {
    setIsDark((prev) => {
      if (prev) {
        localStorage.theme = "light";
      } else {
        localStorage.theme = "dark";
      }
      return !prev;
    });
  };

  useEffect(() => {
    if (localStorage.theme) return;
    localStorage.setItem(
      "theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return [isDark, darkModeButtonHandler];
};

export default useDarkMode;

"use client";
import React from "react";

const ModeButton = () => {
  const clickModeButton = () => {
    alert("준비중입니다!");
  };
  return (
    <button className="dark:text-white" type="button" onClick={clickModeButton}>
      Mode
    </button>
  );
};

export default ModeButton;

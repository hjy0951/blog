"use client";
import React from "react";

export const ModeButton = () => {
  const clickModeButton = () => {
    alert("준비중입니다!");
  };
  return (
    <button type="button" onClick={clickModeButton}>
      Mode
    </button>
  );
};

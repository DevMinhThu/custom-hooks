import React from "react";
import useDarkMode from "./useDarkMode.js";

function DarkModeComponent() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        border: `1px solid ${isDarkMode ? "orange" : "black"}`,
        background: "none",
        color: isDarkMode ? "orange" : "black",
      }}
    >
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeComponent;

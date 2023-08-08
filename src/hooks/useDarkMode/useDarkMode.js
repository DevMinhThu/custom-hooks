import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storageDarkMode = localStorage.getItem("darkMode");
    if (storageDarkMode) {
      setIsDarkMode(storageDarkMode === "true");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;

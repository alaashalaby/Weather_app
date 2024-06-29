import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("theme");
    if (themeFromLocalStorage === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
  };
  return (
    <>
      <Header handleToggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
    </>
  );
};

export default Layout;

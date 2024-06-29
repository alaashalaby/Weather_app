import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import WeatherContainer from "../components/Weather/WeatherContainer";
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
    <div className="bg-linear-light dark:bg-linear-dark pb-2">
      <Header handleToggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
      <WeatherContainer />
    </div>
  );
};

export default Layout;

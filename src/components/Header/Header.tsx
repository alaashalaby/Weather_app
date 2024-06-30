import { useEffect, useState } from "react";
import HeaderIcons from "./HeaderIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
type HeaderProps = {
  cityName: string;
  handleCityNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
  const Header = ({ cityName, handleCityNameChange }: HeaderProps) => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
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
    <header className="bg-light-150 dark:bg-dark-primary pr-2 py-2 md:px-3 md:py-0 sticky inset-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center relative">
        <Logo />
        <SearchBar
          isSearchBarVisible={isSearchBarVisible}
          cityName={cityName}
          handleCityNameChange={handleCityNameChange}
        />
        <HeaderIcons
          isSearchBarVisible={isSearchBarVisible}
          setIsSearchBarVisible={setIsSearchBarVisible}
          handleToggleTheme={handleToggleTheme}
          isDarkMode={isDarkMode}
        />
      </div>
    </header>
  );
};

export default Header;

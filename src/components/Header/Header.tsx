import { useState } from "react";
import HeaderIcons from "./HeaderIcons";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
const Header = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  return (
    <header className="bg-light-150  pr-2 py-2 md:px-3 md:py-0 sticky inset-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center relative">
        <Logo />
        <SearchBar isSearchBarVisible={isSearchBarVisible} />
        <HeaderIcons
          isSearchBarVisible={isSearchBarVisible}
          setIsSearchBarVisible={setIsSearchBarVisible}
        />
      </div>
    </header>
  );
};

export default Header;

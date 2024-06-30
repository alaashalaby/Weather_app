import {
  BiCurrentLocation,
  BiMoon,
  BiSearch,
  BiSun,
  BiX,
} from "react-icons/bi";
import Button from "../../shared/Button";
type Props = {
  isSearchBarVisible: boolean;
  setIsSearchBarVisible: (value: boolean) => void;
  handleToggleTheme: () => void;
  isDarkMode: boolean;
  handleGetCurrentLocation:()=>void
};
const HeaderIcons = ({
  isSearchBarVisible,
  setIsSearchBarVisible,
  handleToggleTheme,
  isDarkMode,
  handleGetCurrentLocation,
}: Props) => {
  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };
  return (
    <div className="flex items-center gap-2">
      <Button
        ariaLabel="search Icon"
        className=" text-dark-accent bg-light-250 dark:bg-dark-secondary text-2xl block md:hidden"
        onClick={handleToggleSearchBar}
      >
        {isSearchBarVisible ? <BiX /> : <BiSearch />}
      </Button>
      {!isSearchBarVisible && (
        <>
          <Button
            className="text-dark-accent bg-light-250 dark:bg-dark-secondary"
            aria-label="Toggle theme"
            onClick={handleToggleTheme}
          >
            {isDarkMode ? <BiMoon /> : <BiSun />}
          </Button>
          <Button
            ariaLabel="current location"
            className="bg-light-300 dark:bg-dark-purpleColor"
            onClick={handleGetCurrentLocation}
          >
            <BiCurrentLocation />
          </Button>
        </>
      )}
    </div>
  );
};

export default HeaderIcons;

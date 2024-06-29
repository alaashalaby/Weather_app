import { BiCurrentLocation, BiSearch, BiSun, BiX } from "react-icons/bi";
import Button from "../../shared/Button";
type Props = {
  isSearchBarVisible: boolean;
  setIsSearchBarVisible: (value: boolean) => void;
};
const HeaderIcons = ({ isSearchBarVisible, setIsSearchBarVisible }: Props) => {
  const handleToggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };
  return (
    <div className="flex items-center gap-2">
      <Button
        ariaLabel="search Icon"
        className=" text-dark-accent bg-dark-secondary text-2xl block md:hidden"
        onClick={handleToggleSearchBar}
      >
        {isSearchBarVisible ? <BiX /> : <BiSearch />}
      </Button>
      {!isSearchBarVisible && (
        <>
          <Button
            className="text-dark-accent bg-light-250 "
            aria-label="Toggle theme"
          >
            <BiSun />
          </Button>
          <Button ariaLabel="current location" className="bg-light-300 ">
            <BiCurrentLocation />
          </Button>
        </>
      )}
    </div>
  );
};

export default HeaderIcons;

import { BiCalendar, BiLocationPlus } from "react-icons/bi";
import icon from "../../assets/rain.svg";
import { ReactNode } from "react";
type WeatherLocationAndDateProps = {
  content: string;
  icon: ReactNode;
};
const WeatherLocationAndDate = ({
  content,
  icon,
}: WeatherLocationAndDateProps) => {
  return (
    <p className="flex items-center gap-2 mb-3">
      <span className="text-2xl text-light-300 dark:text-dark-purpleColor">{icon}</span>
      <span className="text-">{content}</span>
    </p>
  );
};
const CurrentWeatherItem = () => {
  return (
    <div className="bg-light-50 dark:bg-dark-secondary text-light-350 dark:text-dark-accent shadow-md rounded-xl p-5 h-fit">
      <p className="text-2xl mb-2">Now</p>
      <div className="flex items-center justify-between mb-2 md:gap-9">
        <h2 className="text-7xl">12&deg;C</h2>
        <img src={icon} className="w-24" alt="weather icon" />
      </div>
      <p className="text-xl mb-2">Broken Clouds</p>
      <hr className="my-5 " />
      <div>
        <WeatherLocationAndDate
          icon={<BiCalendar />}
          content={"Monday , 1Mar"}
        />
        <WeatherLocationAndDate
          icon={<BiLocationPlus />}
          content={"London, GB"}
        />
      </div>
    </div>
  );
};

export default CurrentWeatherItem;

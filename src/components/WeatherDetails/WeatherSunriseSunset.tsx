import { ReactNode } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
type WeatherSunriseSunsetItemProps = {
    icon: ReactNode;
    content: string;
    time: string;
}
const WeatherSunriseSunsetItem = ({icon , content,time}:WeatherSunriseSunsetItemProps) => {
    return (
      <div className="bg-transparent flex items-center gap-7 justify-around md:justify-normal">
        <span className="text-5xl text-light-350 dark:text-dark-accent">
          {icon}
        </span>
        <div>
          <p className="text-light-400 dark:text-gray-400 mb-2">{content}</p>
          <p className="text-2xl text-light-350 dark:text-dark-accent">
            {time}
          </p>
        </div>
      </div>
    );
}
const WeatherSunriseSunset = () => {
    return (
      <div className=" bg-light-150 dark:bg-dark-thirty p-4 rounded-xl mt-5 flex-1">
        <h3 className="text-light-400 dark:text-gray-400">Sunrise & Sunset</h3>
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 mt-10">
          <WeatherSunriseSunsetItem
            icon={<BiSun />}
            content="Sunset"
            time="6.35 AM"
          />
          <WeatherSunriseSunsetItem
            icon={<BiMoon />}
            content="Sunrise"
            time="9.24 PM"
          />
        </div>
      </div>
    );
}

export default WeatherSunriseSunset

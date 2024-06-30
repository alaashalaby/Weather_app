import { ReactNode } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FormatTime } from "../../util/FormatTime";
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
const WeatherSunriseSunset = ({ weatherData }: { weatherData: WeatherData }) => {
    return (
      <div className=" bg-light-150 dark:bg-dark-thirty p-4 rounded-xl mt-5 flex-1">
        <h3 className="text-light-400 dark:text-gray-400">Sunrise & Sunset</h3>
        <div className="flex flex-col md:flex-row gap-8 md:gap-5 mt-10">
          <WeatherSunriseSunsetItem
            icon={<BiMoon />}
            content="Sunset"
            time={FormatTime(weatherData && weatherData?.sys?.sunset)}
          />
          <WeatherSunriseSunsetItem
            icon={<BiSun />}
            content="Sunrise"
            time={FormatTime(weatherData&& weatherData?.sys?.sunrise)}
          />
        </div>
      </div>
    );
}

export default WeatherSunriseSunset

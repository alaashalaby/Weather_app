import { BiCalendar, BiLocationPlus } from "react-icons/bi";
import { ReactNode } from "react";
import { format } from "date-fns";
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
      <span className="text-2xl text-light-300 dark:text-dark-purpleColor">
        {icon}
      </span>
      <span className="text-">{content}</span>
    </p>
  );
};

const CurrentWeatherItem = ({ weatherData }: { weatherData: WeatherData }) => {
  const date = format(new Date(weatherData&& weatherData?.dt * 1000), "EEEE , d MMMM");
  console.log(weatherData);
  return (
    <div className="bg-light-50 dark:bg-dark-secondary text-light-350 dark:text-dark-accent shadow-md rounded-xl p-5 h-fit">
      <p className="text-2xl mb-2">Now</p>
      <div className="flex items-center justify-between mb-2 md:gap-9">
        <h2 className="text-7xl">{weatherData?.main?.temp.toFixed()}&deg;C</h2>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
          className="w-24"
          alt="weather icon"
        />
      </div>
      <p className="text-xl mb-2 capitalize">
        {weatherData?.weather[0]?.description}
      </p>
      <hr className="my-5 " />
      <div>
        <WeatherLocationAndDate icon={<BiCalendar />} content={date} />
        <WeatherLocationAndDate
          icon={<BiLocationPlus />}
          content={weatherData?.name + ", " + weatherData?.sys?.country}
        />
      </div>
    </div>
  );
};

export default CurrentWeatherItem;

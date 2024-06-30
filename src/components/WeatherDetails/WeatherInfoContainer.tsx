import { BiDroplet, BiSolidThermometer } from "react-icons/bi";
import WeatherInfoItem from "./WeatherInfoItem";
import { MdOutlineVisibility } from "react-icons/md";
import { WiWindy } from "react-icons/wi";

const WeatherInfoContainer = ({weatherData}: {weatherData: WeatherData}) => {
  const visibility = weatherData && (weatherData?.visibility / 1000).toFixed(1);
  return (
    <div className="flex flex-col md:flex-row mt-5 gap-3 md:items-center justify-between">
      {weatherData && (
        <>
          <WeatherInfoItem
            content="Humidity"
            icon={<BiDroplet />}
            value={`${weatherData.main.humidity}%`}
          />
          <WeatherInfoItem
            content="Pressure"
            icon={<WiWindy />}
            value={`${weatherData.main.pressure} hpa`}
          />
          <WeatherInfoItem
            content="Feels Like"
            icon={<BiSolidThermometer />}
            value={`${weatherData.main.feels_like.toFixed(1)}°C`}
          />
        </>
      )}

      <WeatherInfoItem
        content="Visibility"
        icon={<MdOutlineVisibility />}
        value={`${visibility} Km`}
      />
    </div>
  );
};

export default WeatherInfoContainer;

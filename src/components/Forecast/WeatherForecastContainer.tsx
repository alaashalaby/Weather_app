import { filterAndFormatForEcastData } from "../../util/filterAndFormatForcastData";
import ForecastItem from "./ForecastItem";

const WeatherForecastContainer = ({ forecastData }: { forecastData: ForecastData | null }) => {
  const formattedForecastData = forecastData ? filterAndFormatForEcastData(forecastData) : []
  return (
    <div>
      <p className="text-2xl my-4 text-light-350 dark:text-dark-accent">
        5 Days Forecast
      </p>
      <div className="bg-light-50 dark:bg-dark-secondary rounded-xl p-5 mt-4 shadow-md">
        {formattedForecastData && formattedForecastData.map(item=><ForecastItem key={item.date} data={item} />)}
      </div>
    </div>
  );
};

export default WeatherForecastContainer

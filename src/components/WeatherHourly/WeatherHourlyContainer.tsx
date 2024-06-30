import { filterTodayForecastData } from '../../util/filterAndFormatForcastData';
import WeatherHourlyItem from './WeatherHourlyItem';
const WeatherHourlyContainer = ({
  forecastData,
}: {
  forecastData: ForecastData;
  }) => {
  const todayForecastData = forecastData
    ? filterTodayForecastData(forecastData)
    : [];
const hourlyData = todayForecastData.slice(0, 8);
  return (
    <div>
      <p className="text-2xl my-4 text-light-350 dark:text-dark-accent">
        Today at
      </p>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-2 rounded-xl bg-light-50 dark:bg-dark-secondary p-4 shadow-md">
        {hourlyData &&
          hourlyData.map((item, index) => (
            <WeatherHourlyItem key={index} forecast={item} />
          ))}
      </div>
    </div>
  );
};

export default WeatherHourlyContainer

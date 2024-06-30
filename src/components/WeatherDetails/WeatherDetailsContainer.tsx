import WeatherAirQuality from "./WeatherAirQuality"
import WeatherInfoContainer from "./WeatherInfoContainer";
import WeatherSunriseSunset from "./WeatherSunriseSunset"

const WeatherDetailsContainer = ({weatherData}: {weatherData: WeatherData}) => {
  return (
    <div className="bg-light-50 dark:bg-dark-secondary text-dark-accent shadow-md rounded-xl p-5">
      <h1 className="text-xl mb-2 text-light-350 dark:text-dark-accent">
        Todays Highlights
      </h1>
      <div className="flex flex-col md:flex-row gap-2 ">
        <WeatherAirQuality/>
        <WeatherSunriseSunset weatherData={weatherData} />
      </div>
      <WeatherInfoContainer weatherData={weatherData} />
    </div>
  );
}

export default WeatherDetailsContainer

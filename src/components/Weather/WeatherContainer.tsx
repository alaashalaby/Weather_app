import CurrentWeatherItem from "../CurrentWeather/CurrentWeatherItem";
import WeatherForecastContainer from "../Forecast/WeatherForecastContainer";
import WeatherDetailsContainer from "../WeatherDetails/WeatherDetailsContainer";
import WeatherHourlyContainer from "../WeatherHourly/WeatherHourlyContainer";

const WeatherContainer = ({
  weatherData,
  airPollution,
  forecastData,
}: {
  weatherData: WeatherData;
  airPollution: AirPollutionData
    forecastData: ForecastData
}) => {
  return (
    <main className="mt-3 px-2">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        <div>
          <CurrentWeatherItem weatherData={weatherData} />
          <WeatherForecastContainer forecastData={forecastData} />
        </div>
        <div className="flex-1">
          <WeatherDetailsContainer
            weatherData={weatherData}
            airPollution={airPollution}
          />
          <WeatherHourlyContainer forecastData={forecastData} />
        </div>
      </div>
    </main>
  );
};

export default WeatherContainer;

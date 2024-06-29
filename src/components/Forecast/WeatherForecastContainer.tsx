import ForecastItem from "./ForecastItem"

const WeatherForecastContainer = () => {
    return (
      <div>
        <p className="text-2xl my-4 text-light-350 dark:text-dark-accent">
          5 Days Forecast
        </p>
        <div className="bg-light-50 dark:bg-dark-secondary rounded-xl p-5 mt-4 shadow-md">
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
          <ForecastItem />
        </div>
      </div>
    );
}

export default WeatherForecastContainer

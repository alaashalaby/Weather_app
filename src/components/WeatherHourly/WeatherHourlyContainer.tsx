import WeatherHourlyItem from './WeatherHourlyItem';

const WeatherHourlyContainer = () => {
  return (
    <div>
      <p className="text-2xl my-4 text-light-350 dark:text-dark-accent">
        Today at
      </p>
      <div className="flex flex-col md:flex-row gap-5 rounded-xl bg-light-50 dark:bg-dark-secondary p-4 shadow-md">
        <WeatherHourlyItem />
        <WeatherHourlyItem />
        <WeatherHourlyItem />
        <WeatherHourlyItem />
        <WeatherHourlyItem />
        <WeatherHourlyItem />
        <WeatherHourlyItem />
        <WeatherHourlyItem />
      </div>
    </div>
  );
}

export default WeatherHourlyContainer

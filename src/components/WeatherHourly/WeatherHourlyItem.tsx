type Props = {
  time: string;
    temperature: number;
    description: string;
    icon: string;
}
const WeatherHourlyItem = ({ forecast }:{forecast:Props}) => {
  return (
    <div className=" bg-light-150 dark:bg-dark-thirty flex flex-col flex-grow text-center rounded-xl mb-2 p-4 ">
      <p className="text-light-300 dark:text-gray-400 text-lg ">{forecast && forecast.time}</p>
      <img
        src={forecast.icon}
        className="w-10 m-auto"
        alt={forecast && forecast.description}
      />
      <p className="text-light-300 dark:text-gray-400 text-xl">
        {forecast && forecast.temperature}&deg;C
      </p>
    </div>
  );
};

export default WeatherHourlyItem

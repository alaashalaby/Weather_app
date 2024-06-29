import img from "../../assets/rain.svg"
const WeatherHourlyItem = () => {
  return (
    <div className=" bg-light-150 dark:bg-dark-thirty flex flex-col flex-grow text-center rounded-xl mb-2 p-4 ">
      <p className="text-light-300 dark:text-gray-400 text-lg ">9 AM</p>
      <img src={img} className="w-10 m-auto" alt="rain" />
      <p className="text-light-300 dark:text-gray-400 text-xl">7&deg;C</p>
    </div>
  );
}

export default WeatherHourlyItem

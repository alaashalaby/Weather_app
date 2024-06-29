import image from "../../assets/rain.svg"
const ForecastItem = () => {
  return (
    <div className="bg-light-150 dark:bg-dark-thirty flex items-center justify-between gap-7 md:gap-10 rounded-xl mb-2 px-3 py-1">
      <div className="flex items-center gap-3">
        <img src={image} className="w-14" alt="rain" />
        <h4 className="text-light-350 dark:text-dark-accent text-2xl">
          7&deg;C
        </h4>
      </div>
      <p className="text-light-300 dark:text-gray-400 text-xl">2 Mar</p>
      <p className="text-light-300 dark:text-gray-400 text-xl">Sunday</p>
    </div>
  );
}

export default ForecastItem

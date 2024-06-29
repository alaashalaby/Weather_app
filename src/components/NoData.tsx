import nodataImg from "../assets/Weather.png";
const NoData = () => {
  return (
    <div className="flex flex-col items-center mx-auto my-8">
      <h3 className="text-light-350 dark:text-dark-accent text-2xl">
        Enter City Name to get Weather &#128580;
      </h3>
      <img src={nodataImg} alt="no city name image" className="w-72" />
    </div>
  );
};

export default NoData;

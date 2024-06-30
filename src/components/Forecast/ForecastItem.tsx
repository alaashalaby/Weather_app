type Props = {
  day: string;
  date: number;
  month: string;
  temp: number;
  icon: string;
};
const ForecastItem = ({ data }: { data: Props }) => {
  return (
    <div className="bg-light-150 dark:bg-dark-thirty flex items-center justify-between gap-7 md:gap-10 rounded-xl mb-2 px-3 py-1">
      <div className="flex items-center gap-3">
        <img src={data.icon} className="w-14" alt="rain" />
        <h4 className="text-light-350 dark:text-dark-accent text-2xl">
          {data && data.temp}&deg;C
        </h4>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-light-300 dark:text-gray-400 text-lg">
          {data && data.date}
          {data && data.month}
        </p>
        <p className="text-light-300 dark:text-gray-400 text-lg">
          {data && data.day}
        </p>
      </div>
    </div>
  );
};

export default ForecastItem

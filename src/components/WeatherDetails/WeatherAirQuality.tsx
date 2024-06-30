import { LuWind } from "react-icons/lu";
type WeatherAirQualityItemProps = {
  dataName: string;
  dataValue: number;
};
const WeatherAirQualityItem = ({
  dataName,
  dataValue,
}: WeatherAirQualityItemProps) => {
  return (
    <div className="text-center">
      <p className="text-md mb-1 text-light-400 dark:text-gray-400">
        {dataName}
      </p>
      <p className="text-2xl text-light-350 dark:text-dark-accent">
        {dataValue}
      </p>
    </div>
  );
};
const WeatherAirQuality = ({ airPollution }: { airPollution :AirPollutionData}) => {
  return (
    <div className="bg-light-150 dark:bg-dark-thirty p-4 rounded-xl mt-5">
      <div className="flex items-center justify-between">
        <h3 className="text-light-400 dark:text-gray-400">Air Quality Index</h3>
        <span className="font-medium bg-light-300 dark:bg-dark-purpleColor py-1 px-5 rounded-full">
          Good
        </span>
      </div>
      <div className="mt-7 mb-2 flex items-center justify-center flex-wrap gap-8">
        <span className="text-5xl text-light-350 dark:text-dark-accent">
          <LuWind />
        </span>
        <WeatherAirQualityItem
          dataName="PM2.5"
          dataValue={airPollution && airPollution?.list[0]?.components?.pm2_5}
        />
        <WeatherAirQualityItem
          dataName="NO2"
          dataValue={airPollution && airPollution?.list[0]?.components?.no2}
        />
        <WeatherAirQualityItem
          dataName="SO2"
          dataValue={airPollution && airPollution?.list[0]?.components?.so2}
        />
        <WeatherAirQualityItem
          dataName="O3.0"
          dataValue={airPollution && airPollution?.list[0]?.components?.o3}
        />
      </div>
    </div>
  );
};

export default WeatherAirQuality;

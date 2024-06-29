import { ReactNode } from "react";
type WeatherInfoItemProps = {
  content: string;
  icon: ReactNode;
  value:string | number

}
const WeatherInfoItem = ({content,icon,value}:WeatherInfoItemProps) => {
  return (
    <div className="bg-light-150 dark:bg-dark-thirty p-3 rounded-xl flex-1 shadow-md dark:shadow-customShadow">
      <p className="text-light-400 dark:text-gray-400 mb-2 text-xl">{content}</p>
      <div className="flex items-center justify-between gap-5 mt-5">
        <span className="text-5xl text-light-350 dark:text-dark-accent">
          {icon}
        </span>
        <p className="text-xl text-light-200 dark:text-dark-purpleColor">
          {value}
        </p>
      </div>
    </div>
  );
}

export default WeatherInfoItem

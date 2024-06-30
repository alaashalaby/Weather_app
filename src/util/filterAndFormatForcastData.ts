import { format, getDate } from "date-fns";
type ForecastDataProps = {
  day: string;
  date: number;
  month: string;
  temp: number;
  icon: string;
};
export function filterAndFormatForEcastData(forecastData: ForecastData):Array<ForecastDataProps> {
  const filteredData = forecastData.list.filter((item) => {
    return new Date(item.dt * 1000).getHours() === 12;
  });
  return filteredData.slice(0, 5).map((item) => {
    const date = new Date(item.dt * 1000);
    return {
      day: format(date, "EEEE"),
      date: getDate(date),
      month: format(date, "MMMM"),
      temp: Math.round(item.main.temp),
      icon: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
    };
  });
}

export function filterTodayForecastData(forecastData: ForecastData): Array<{
  time: string;
  temperature: number;
  description: string;
  icon: string;
}> {
  const today = getDate(new Date());
  return forecastData.list.filter((item) => {
    const date = new Date(item.dt * 1000);
    return getDate(date) === today;
  }).map((item) => {
    const date = new Date(item.dt * 1000);
    return {
      time: format(date, 'p'),
      temperature: item.main.temp,
      description: item.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`
    };
  });
}
import axiosInstance from "./axiosInstance";
export const fetchWeatherByCityName = async (
  cityName: string,
  apiKey: string
) => {
  return await axiosInstance.get<never, WeatherData>(
    `/weather?q=${cityName}&appid=${apiKey}`
  );
};

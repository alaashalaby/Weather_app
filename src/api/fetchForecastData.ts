import axiosInstance from "./axiosInstance";
const apiKey = import.meta.env.VITE_API_KEY as string;

export async function fetchFiveDayForecast(lat: number, lon: number) {
  const response = await axiosInstance.get<never, ForecastData>(
    `/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  return response;
}
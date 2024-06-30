import axiosInstance from "./axiosInstance";
const apiKey = import.meta.env.VITE_API_KEY as string;

export async function fetchWeatherByCoordinates(lat: number, lon: number) {
  const response = await axiosInstance.get<never, WeatherData>(
    `/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
  return response;
}

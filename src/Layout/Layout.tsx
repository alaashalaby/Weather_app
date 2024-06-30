import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import WeatherContainer from "../components/Weather/WeatherContainer";
import axiosInstance from "../api/axiosInstance";
import NoData from "../components/NoData";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
const Layout = () => {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const apiKey = import.meta.env.VITE_API_KEY as string;
  useEffect(() => {
    const fetchWeatherByCityName = async (cityName: string) => {
      setIsLoading(true);
      setError("");
      try {
        const response = await axiosInstance.get<never, WeatherData>(
          `/weather?q=${cityName}&appid=${apiKey}`
        );
        setWeatherData(response);
        setIsLoading(false);
      } catch (error: any) {
        setError(
          error.message ||
            "Failed to fetch weather data, Please try again later"
        );
        setWeatherData(null);
      } finally {
        setIsLoading(false);
      }
    };
    const debounce = setTimeout(() => {
      if (cityName.trim() !== "") {
        fetchWeatherByCityName(cityName);
      }
    }, 700);
    return () => clearTimeout(debounce);
  }, [cityName, apiKey]);
  const handleCityNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cityNameValue = e.target.value;
    setCityName(cityNameValue);
    if (cityNameValue.trim() === "") {
      setWeatherData(null);
      setError("");
    }
  };
  return (
    <div className="bg-linear-light dark:bg-linear-dark pb-2 min-h-screen">
      <Header cityName={cityName} handleCityNameChange={handleCityNameChange} />
      {!isLoading && !cityName && <NoData />}
      {isLoading && <LoadingSpinner />}
      {weatherData && <WeatherContainer weatherData={weatherData} />}
      {error && (
        <p className="text-red-500 text-center mt-7 text-3xl">{error}</p>
      )}
    </div>
  );
};

export default Layout;

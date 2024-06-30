import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import WeatherContainer from "../components/Weather/WeatherContainer";
import axiosInstance from "../api/axiosInstance";
import NoData from "../components/NoData";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { fetchWeatherByCoordinates } from "../api/geoLocation";
import { fetchAirPollutionData } from "../api/fetchAirPollution";
import { fetchFiveDayForecast } from "../api/fetchForecastData";
import { AxiosError } from "axios";
const Layout = () => {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [airPollution, setAirPollution] = useState<AirPollutionData | null>(
    null
  );
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
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
        if (response.coord) {
          const airPollutionResponse = await fetchAirPollutionData(
            response.coord.lat,
            response.coord.lon
          );
          setAirPollution(airPollutionResponse);
          const forecastResponse = await fetchFiveDayForecast(
            response.coord.lat,
            response.coord.lon
          );
          setForecastData(forecastResponse);
        }
        setIsLoading(false);
      } catch (error: AxiosError | unknown) {
        if (error instanceof AxiosError) {
          setError(
            error.message ||
              "Failed to fetch weather data, Please try again later"
          );
        } else {
          setError("An unknown error occurred");
        }
        setWeatherData(null);
        setAirPollution(null);
        setForecastData(null);
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
      setAirPollution(null);
      setForecastData(null);
      setError("");
    }
  };
  const handleGetCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setIsLoading(true);
          setError("");
          try {
            const response = await fetchWeatherByCoordinates(
              position.coords.latitude,
              position.coords.longitude
            );
            setWeatherData(response);
            if (response.coord) {
              const airPollutionResponse = await fetchAirPollutionData(
                response.coord.lat,
                response.coord.lon
              );
              setAirPollution(airPollutionResponse);
              const forecastResponse = await fetchFiveDayForecast(
                response.coord.lat,
                response.coord.lon
              );
              setForecastData(forecastResponse);
            }
            setIsLoading(false);
          } catch (error: AxiosError | unknown) {
            if (error instanceof AxiosError) {
              setError(
                error.message ||
                "Failed to fetch weather data, Please try again later"
              )
            }
          }
            finally {
            setIsLoading(false);
          }
        },
        (error ) => {
          setError("Failed to get Current Location" || error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser");
    }
  };
  return (
    <div className="bg-linear-light dark:bg-linear-dark pb-2 min-h-screen">
      <Header
        cityName={cityName}
        handleCityNameChange={handleCityNameChange}
        handleGetCurrentLocation={handleGetCurrentLocation}
      />
      {!isLoading && !weatherData && !cityName && <NoData />}
      {isLoading && <LoadingSpinner />}
      {weatherData &&
        airPollution &&
        forecastData&&(
          <WeatherContainer
            weatherData={weatherData}
            airPollution={airPollution}
            forecastData={forecastData}
          />
        )}
      {error && (
        <p className="text-red-500 text-center mt-7 text-3xl">{error}</p>
      )}
    </div>
  );
};

export default Layout;

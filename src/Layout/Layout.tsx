const Layout = () => {
  return <>Layout</>;
};

exportimport { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import CurrentWeatherItem from "../components/CurrentWeather/CurrentWeatherItem";
import WeatherForecastContainer from "../components/Forecast/WeatherForecastContainer";
import WeatherDetailsContainer from "../components/WeatherDetails/WeatherDetailsContainer";
import WeatherHourlyContainer from "../components/WeatherHourly/WeatherHourlyContainer";

const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const themeFromLocalStorage = localStorage.getItem("theme");
    if (themeFromLocalStorage === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
  };
  return (
    <div className="bg-linear-light dark:bg-linear-dark pb-2">
      <Header handleToggleTheme={handleToggleTheme} isDarkMode={isDarkMode} />
      <main className="mt-3 px-2">
        <div className="container mx-auto flex flex-col lg:flex-row gap-8">
          <div>
            <CurrentWeatherItem />
            <WeatherForecastContainer />
          </div>
          <div className="flex-1">
            <WeatherDetailsContainer />
            <WeatherHourlyContainer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout
 default Layout;

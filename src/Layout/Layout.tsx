import Header from "../components/Header/Header";
import WeatherContainer from "../components/Weather/WeatherContainer";
const Layout = () => {
  return (
    <div className="bg-linear-light dark:bg-linear-dark pb-2">
      <Header/>
      <WeatherContainer />
    </div>
  );
};

export default Layout;

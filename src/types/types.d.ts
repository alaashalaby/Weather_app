interface WeatherData {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}
interface Clouds {
  all: number;
}
interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Coord {
  lon: number;
  lat: number;
}
interface AirPollutionData {
  coord: Coord;
  list: AirPollutionList[];
}interface AirPollutionList {
  main: Main;
  components: Components;
  dt: number;
}
interface Components {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}
interface Main {
  aqi: number;
}

interface ForecastData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}
interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
interface ForecastItem {
  dt: number;
  main: ForecastMain;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
  rain?: Rain;
}
interface Rain {
  "3h": number;
}
interface Sys {
  pod: string;
}
interface ForecastMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
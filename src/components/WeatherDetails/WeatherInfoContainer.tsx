import { BiDroplet, BiSolidThermometer } from 'react-icons/bi';
import WeatherInfoItem from './WeatherInfoItem';
import { MdOutlineVisibility } from 'react-icons/md';
import { WiWindy } from 'react-icons/wi';

const WeatherInfoContainer = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 gap-3 md:items-center justify-between">
      <WeatherInfoItem content="Humidity" icon={<BiDroplet />} value="82%" />
      <WeatherInfoItem content="Pressure" icon={<WiWindy />} value="1025hpa" />
      <WeatherInfoItem
        content="Visibility"
        icon={<MdOutlineVisibility />}
        value="10Km"
      />
      <WeatherInfoItem
        content="Feels Like"
        icon={<BiSolidThermometer />}
        value="2&deg;C"
      />
    </div>
  );
}

export default WeatherInfoContainer

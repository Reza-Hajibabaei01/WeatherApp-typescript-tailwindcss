import { BiChevronDown } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { useCity } from "../../context/CityContext";

const CurrentWeatherCard: React.FC = () => {
  const { weatherData, selectedCity } = useCity();
  // گرفتن اطلاعات هفته
  const localDate = new Date(Date.now() + (weatherData?.timezone  ?? 1 )* 1000);
  const dayName = localDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const year = localDate.toLocaleDateString("en-US", {
    year: "numeric",
  });
  const month = localDate.toLocaleDateString("en-US", {
    month: "long",
  });
  const day = localDate.toLocaleDateString("en-US", {
    day: "numeric",
  });
  return (
    <div className="bg-[#1E1E1E] h-55 rounded-3xl p-4 space-y-2">
      <div className="flex justify-between items-center">
        <div className="bg-[#363636] py-0.5 px-2 text-white flex justify-center items-center space-x-1 rounded-xl">
          <CiLocationOn />
          <h2 className="font-light">
            {selectedCity?.name ?? "Electoral city"}
          </h2>
        </div>
        <div className="bg-[#363636] py-0.5 px-3 text-white flex justify-center items-end space-x-1 cursor-pointer rounded-xl font-semibold">
          C<BiChevronDown />
        </div>
      </div>
      <div className=" flex justify-between h-40 pb-2">
        <div className="w-1/3 space-y-1">
          <h2 className="text-white text-3xl font-medium">
            {dayName}
          </h2>
          <h6 className="text-white text-sm font-light">{day} {month}, {year}</h6>
        </div>
        <div className="w-1/3 flex justify-center items-end">
          <img
            className="w-35 h-30 "
            src="../../../public/icons/icon6.png"
            alt=""
          />
        </div>
        <div className="w-1/3 flex flex-col justify-between">
          <div className="text-right">
            <h2 className="text-white text-3xl font-medium">
              {weatherData?.main.temp_max.toFixed(0)}°C
            </h2>
            <h3 className="text-[#8a8a8a] font-medium text-lg">
              /{weatherData?.main.temp_min.toFixed(0)}°C
            </h3>
          </div>
          <div className="text-right">
            <h2 className="text-white font-normal text-lg">Rain</h2>
            <h3 className="text-white font-normal text-base">Fells 31°</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;

import { BiChevronDown } from "react-icons/bi";
import { useCity } from "../../context/CityContext";

function OtherCountriesCard() {
  const { weatherData, selectedCity } = useCity();
  //بزگ کردن حرف اول وضعیت هوا
  const description = weatherData?.weather[0]?.description ?? "----";
  const upperCase = description?.charAt(0).toUpperCase() + description.slice(1);
  return (
    <div className="bg-[#1E1E1E] rounded-3xl p-4 h-67.25 space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-medium text-lg">Others Countries</h1>
        <div className="flex justify-center items-end space-x-1 cursor-pointer text-white font-normal">
          <p>See All</p>
          <BiChevronDown />
        </div>
      </div>
      <div className="bg-[#1E1E1E] border-2 border-[#363636] px-3 py-2 rounded-2xl flex justify-between items-center">
        <div className="w-1/3">
          <h6 className="text-[#8a8a8a] text-[12px]">Australia</h6>
          <h2 className="text-white font-normal text-lg">{selectedCity?.name ?? "-----"}</h2>
          <h6 className="text-white text-sm">{upperCase}</h6>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img
            className="w-15 h-15"
            src="../../../public/icons/snow.jpg"
            alt=""
          />
        </div>
        <div className="w-1/3  flex justify-center items-center">
          <h3 className="text-white font-medium text-xl">
            {weatherData?.main.temp_max?.toFixed(0) ?? "--"}°C{" "}
            <span className="text-[#8a8a8a] text-base">
              /{weatherData?.main.temp_min?.toFixed(0) ?? "--"}°C
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default OtherCountriesCard;

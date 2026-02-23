import { BiWind } from "react-icons/bi";
import { LuDroplets } from "react-icons/lu";
import { MdVisibility } from "react-icons/md";
import { TbUvIndex } from "react-icons/tb";

function WeatherHighlightsCard() {
  return (
    <div className=" flex flex-col bg-[rgb(30,30,30)] rounded-3xl p-4 space-y-2">
      <div>
        <h1 className="text-white font-medium text-lg">Today's Highlight</h1>
      </div>
      <div className="flex justify-center items-center space-x-3">
        {/* Wind Status */}
        <div className="bg-[#363636] rounded-2xl p-2 space-y-2 w-25 h-24 text-right">
          <div className="flex items-center justify-end  whitespace-nowrap text-white space-x-1">
            <BiWind />
            <h3 className="text-[12px] font-medium">Wind Status</h3>
          </div>
          <div>
            <h2 className="text-white text-xl font-medium">
              7.95 <span className="text-sm font-normal">km/h</span>
            </h2>
          </div>
          <div>
            <h4 className="text-white font-light text-[12px]">9:00 AM</h4>
          </div>
        </div>
        {/* Humidity */}
        <div className="bg-[#363636] rounded-2xl p-2 space-y-2 w-25 h-24 text-right">
          <div className="flex items-center justify-end  whitespace-nowrap text-white space-x-1">
            <LuDroplets />
            <h3 className="text-[12px] font-medium">Humidity</h3>
          </div>
          <div>
            <h2 className="text-white text-xl font-medium whitespace-nowrap">
              85 <span className="text-sm font-normal">%</span>
            </h2>
          </div>
          <div>
            <p className="text-white font-light text-[12px] whitespace-nowrap">
              Humidity is good
            </p>
          </div>
        </div>
        {/* Sunrise */}
        <div className="bg-[#363636] rounded-2xl p-2 space-y-2 w-45 h-24 flex justify-between items-center">
          <div className="flex items-center justify-center  text-white space-x-1">
            <img src="../../../public/Sunrise.png" alt="" />
          </div>
          <div className="flex flex-col justify-end">
            <h5 className="text-white font-normal text-sm">Sunrise</h5>
            <h2 className="text-white font-medium text-lg">4:50 AM</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-3">
        {/* UV Index */}
        <div className="bg-[#363636] rounded-2xl p-2 space-y-2 w-25 h-24 text-right">
          <div className="flex items-center justify-end  whitespace-nowrap text-white space-x-1">
            <TbUvIndex />
            <h3 className="text-[12px] font-medium">UV Index</h3>
          </div>
          <div>
            <h2 className="text-white text-xl font-medium">
              4 <span className="text-sm font-normal">UV</span>
            </h2>
          </div>
          <div>
            <h4 className="text-white font-light text-[12px]">Moderate UV</h4>
          </div>
        </div>
        {/* Visibility */}
        <div className="bg-[#363636] rounded-2xl p-2 space-y-2 w-25 h-24 text-right">
          <div className="flex items-center justify-end  whitespace-nowrap text-white space-x-1">
            <MdVisibility />
            <h3 className="text-[12px] font-medium">Visibility</h3>
          </div>
          <div>
            <h2 className="text-white text-xl font-medium whitespace-nowrap">
              5 <span className="text-sm font-normal">km</span>
            </h2>
          </div>
          <div>
            <p className="text-white font-light text-[12px] whitespace-nowrap">
              9:00 AM
            </p>
          </div>
        </div>
        {/* Sunset */}
        <div className="bg-[#363636] rounded-2xl p-2 space-y-2 w-45 h-24 flex justify-between items-center">
          <div className="flex items-center justify-center  text-white space-x-1">
            <img src="../../../public/Sunset.png" alt="" />
          </div>
          <div className="flex flex-col justify-end">
            <h5 className="text-white font-normal text-sm">Sunset</h5>
            <h2 className="text-white font-medium text-lg">6:50 PM</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherHighlightsCard;

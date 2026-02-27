import { BiChevronDown } from "react-icons/bi";
import WeatherSlider from "../VerticalSlider";

function OtherCountriesCard() {
  return (
    <div className="bg-[#1E1E1E] overflow-hidden rounded-3xl p-4 h-67.25 space-y-2">
      <div className="flex overflow-hidden justify-between items-center">
        <h1 className="text-white font-medium text-lg">Others Countries</h1>
        <div className="flex justify-center items-end space-x-1 cursor-pointer text-white font-normal">
          <p>See All</p>
          <BiChevronDown />
        </div>
      </div>
      <div className="w-full h-full">
        <WeatherSlider />
      </div>
    </div>
  );
}

export default OtherCountriesCard;

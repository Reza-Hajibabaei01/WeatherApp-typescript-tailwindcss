import { BiChevronDown } from "react-icons/bi";

function OtherCountriesCard() {
  return (
    <div className="bg-[#1E1E1E] rounded-3xl p-4 h-67.25 space-y-2">
      <div className="flex justify-between items-center">
        <h1 className="text-white font-medium text-lg">Others Countries</h1>
        <div className="flex justify-center items-end space-x-1 cursor-pointer text-white font-normal">
          <p>See All</p>
          <BiChevronDown />
        </div>
      </div>
      <div className="bg-[#363636] px-3 py-2 rounded-2xl flex justify-between items-center">
        <div className="w-1/3">
          <h6 className="text-[#8a8a8a] text-[12px]">Australia</h6>
          <h2 className="text-white font-normal text-lg">Canberra</h2>
          <h6 className="text-white text-sm">Sunny</h6>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img className="w-15 h-15"  src="../../../public/test3.png" alt="" /> 
        </div>
        <div className="w-1/3  flex justify-center items-center">
          <h3 className="text-white font-medium text-xl">
            32°<span className="text-[#8a8a8a] text-base">/24°</span>
          </h3>
        </div>
      </div>
      <div className="bg-[#363636] px-3 py-2 rounded-2xl flex justify-between items-center">
        <div className="w-1/3">
          <h6 className="text-[#8a8a8a] text-[12px]">Japan</h6>
          <h2 className="text-white font-normal text-lg">Tokyo</h2>
          <h6 className="text-white text-sm">Mostly Sunny</h6>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <img className="w-15 h-15" src="../../../public/test4.png" alt="" />
        </div>
        <div className="w-1/3  flex justify-center items-center">
          <h3 className="text-white font-medium text-xl">
            30°<span className="text-[#8a8a8a] text-base">/19°</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default OtherCountriesCard;

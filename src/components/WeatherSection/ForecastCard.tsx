function ForecastCard() {
  return (
    <div className=" flex flex-col bg-[rgb(30,30,30)] rounded-3xl p-4 space-y-2">
      <div>
        <h1 className="text-white font-medium text-lg">10 Day Forecast</h1>
      </div>
      <div className="flex justify-center items-center space-x-3">
        {/* section */}
        <div className="bg-[#363636] rounded-2xl py-3 px-1 w-20 flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-white text-sm">Today</h3>
            <div className="w-15 bg-linear-to-r from-transparent via-white/40 to-transparent h-px mt-2"></div>
          </div>
          <div>
            <img className="h-15 w-20" src="../../../public/icons/icon5.png" alt="" />
          </div>
          <div>
            <h3 className="text-white text-bace font-medium">28°C</h3>
          </div>
        </div>
        {/* section */}
        <div className="bg-[#363636] rounded-2xl py-3 px-1 w-20 flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-white text-sm">Today</h3>
            <div className="w-15 bg-linear-to-r from-transparent via-white/40 to-transparent h-px mt-2"></div>
          </div>
          <div>
            <img className="h-15 w-20" src="../../../public/icons/icon4.png" alt="" />
          </div>
          <div>
            <h3 className="text-white text-bace font-medium">28°C</h3>
          </div>
        </div>
        {/* section */}
        <div className="bg-[#363636] rounded-2xl py-3 px-1 w-20 flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-white text-sm">Today</h3>
            <div className="w-15 bg-linear-to-r from-transparent via-white/40 to-transparent h-px mt-2"></div>
          </div>
          <div>
            <img className="h-15 w-20" src="../../../public/icons/icon3.png" alt="" />
          </div>
          <div>
            <h3 className="text-white text-bace font-medium">28°C</h3>
          </div>
        </div>
        {/* section */}
        <div className="bg-[#363636] rounded-2xl py-3 px-1 w-20 flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-white text-sm">Today</h3>
            <div className="w-15 bg-linear-to-r from-transparent via-white/40 to-transparent h-px mt-2"></div>
          </div>
          <div>
            <img className="h-15 w-20" src="../../../public/icons/icon2.png" alt="" />
          </div>
          <div>
            <h3 className="text-white text-bace font-medium">28°C</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForecastCard;

import { BiWind } from "react-icons/bi";
import { LuCircleGauge, LuDroplets } from "react-icons/lu";
import { MdVisibility } from "react-icons/md";
import { useCity } from "../../context/CityContext";

function WeatherHighlightsCard() {
  const { weatherData } = useCity();
  // برای تبدیل متر به کیلومتر
  const visibilityKm = weatherData?.visibility
    ? weatherData.visibility / 1000
    : "--";
  // برای تبدیل ساعت طلوع ازیونیکس به عادی
  const timeStampSunrise = weatherData?.sys.sunrise;
  let timeSunrise = "--:--";
  if (timeStampSunrise) {
    timeSunrise = new Date(timeStampSunrise * 1000).toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  // برای تبدیل ساعت غروب ازیونیکس به عادی
  const timeStampSunset = weatherData?.sys.sunset;
  let timeSunset = "--:--";
  if (timeStampSunset) {
    timeSunset = new Date(timeStampSunset * 1000).toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  // پیام میزان حالت های رطوبت هوا
  const humidity = weatherData?.main.humidity;
  let humidityMassage = "Choose a city";
  if (humidity !== undefined) {
    if (humidity >= 70) {
      humidityMassage = "Very humid";
    } else if (humidity >= 50) {
      humidityMassage = "Humid";
    } else if (humidity >= 30) {
      humidityMassage = "Comfortable";
    } else {
      humidityMassage = "Dry";
    }
  }
  // برای دریافت ساعت و نمایش آن
  const timezoneOffset = weatherData?.timezone;
  let timeHour = "--:--";
  if (timezoneOffset) {
    const utc = new Date();
    const localTime = new Date(utc.getTime() + timezoneOffset);
    timeHour = localTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
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
              {weatherData?.wind.speed.toFixed(1) ?? "--"}{" "}
              <span className="text-sm font-normal">{}km/h</span>
            </h2>
          </div>
          <div>
            <h4 className="text-white font-light text-[10px] whitespace-nowrap">
              Wind direction: <span className="font-normal">{weatherData?.wind.deg}°</span>
            </h4>
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
              {weatherData?.main.humidity ?? "-- "}
              <span className="text-sm font-normal"> %</span>
            </h2>
          </div>
          <div>
            <p className="text-white font-light text-[12px] whitespace-nowrap">
              {humidityMassage}
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
            <h2 className="text-white font-medium text-lg">{timeSunrise}</h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-3">
        {/* UV Index */}
        <div className="bg-[#363636] rounded-2xl p-2 space-y-1 w-25 h-24 text-right">
          <div className="flex items-center justify-end  whitespace-nowrap text-white space-x-1">
            <LuCircleGauge />
            <h3 className="text-[12px] font-medium">Atmospheric</h3>
          </div>
          <div>
            <h2 className="text-white text-lg font-normal whitespace-nowrap">
              <span className="text-sm">Earth: </span>{weatherData?.main.grnd_level ?? "--"}<span className="text-[10px] font-normal">hPa</span>
            </h2>
          </div>
          <div>
            <h2 className="text-white text-lg font-normal whitespace-nowrap">
              <span className="text-sm">Sea: </span>{weatherData?.main.sea_level ?? "--"}<span className="text-[10px] font-normal">hPa</span>
            </h2>
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
              {visibilityKm} <span className="text-sm font-normal">km</span>
            </h2>
          </div>
          <div>
            <p className="text-white font-light text-[12px] whitespace-nowrap">
              {timeHour}
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
            <h2 className="text-white font-medium text-lg">{timeSunset}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherHighlightsCard;

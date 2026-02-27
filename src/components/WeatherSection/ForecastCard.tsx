import { useEffect, useState } from "react";
import { getDailyWeather } from "../../server/ApiDayForecast";
import Slider from "react-slick";
import { useCity } from "../../context/CityContext";

function ForecastCard() {

  const [forecast, setForecast] = useState<any>(null);

  const { selectedCity } = useCity();
  useEffect(() => {
    if(!selectedCity) return;

    const loadWeather = async () => {
      const data = await getDailyWeather(Number(selectedCity?.lat), Number(selectedCity?.lon)); // lat lon شهر
      setForecast(data);
    };

    loadWeather();
  }, [selectedCity]);
  
  // تنظیمات اسلایدر
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    swipe: true,
    arrows: false,
    dots: false,
  };

  return (
    <div className=" flex flex-col w-109 h-55.5 bg-[rgb(30,30,30)] rounded-3xl p-4 space-y-2">
      <div>
        <h1 className="text-white font-medium text-lg">10 Day Forecast </h1>
      </div>
      {!forecast ? (
        <p className="text-white">Loading...</p>
      ) : (
        <Slider {...settings} className="box-border">
          {forecast.time.map((date: Date, i: number) => {
            const temperature = forecast.temperature_2m_max[i].toFixed(0);
            // برای انتخاب آیکون با درنظر گرفتن وضعیت هوا و داینامیک شدن آدرس عکس بدون دستور شرطی
            const code = forecast.weather_code[i].toFixed(0);
            const weatherMap: Record<number, string> = {
              0: "clear",
              1: "clear",
              2: "cloudy",
              3: "cloudy",
              45: "fog",
              48: "fog",
              51: "rain",
              53: "rain",
              55: "rain",
              61: "rain",
              63: "rain",
              65: "rain",
              80: "rain",
              81: "rain",
              82: "rain",
              71: "snow",
              73: "snow",
              75: "snow",
              95: "storm",
            };
            const weatherType = weatherMap[code];
            const iconMap: Record<string, string> = {
              clear: "/icons/clearSky.jpg",
              cloudy: "/icons/fewClouds.jpg",
              rain: "/icons/rain.jpg",
              snow: "/icons/snow.jpg",
              storm: "/icons/thunderstorm.jpg",
              fog: "/icons/mist.jpg",
            };
            return (
              <div key={i} className="px-2 select-none">
                <div className="bg-[#1E1E1E] border-2 border-[#363636] rounded-2xl py-3 px-1 w-20 flex flex-col justify-center items-center space-y-2">
                  <div className="flex flex-col items-center">
                    <h3 className="text-white text-sm">
                      {date.toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                    </h3>
                    <div className="w-full bg-linear-to-r from-transparent via-white/40 to-transparent h-px mt-2"></div>
                  </div>
                  <img
                    className="h-16 w-16"
                    src={iconMap[weatherType] ?? "/icons/showerRain.jpg"}
                    alt=""
                  />
                  <h3 className="text-white font-medium">{temperature}°C</h3>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
}

export default ForecastCard;

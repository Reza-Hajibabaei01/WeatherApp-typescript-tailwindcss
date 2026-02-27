import { useEffect, useState } from "react";
import { getDailyWeather } from "../../server/ApiDayForecast";
import Slider from "react-slick";
import { useCity } from "../../context/CityContext";

function ForecastCard() {
  const [forecast, setForecast] = useState<any>(null);

  const { selectedCity } = useCity();
  useEffect(() => {
    if (!selectedCity) return;

    const loadWeather = async () => {
      const data = await getDailyWeather(
        Number(selectedCity?.lat),
        Number(selectedCity?.lon),
      ); // lat lon شهر
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
        <h1 className="text-white font-medium text-lg">16 Day Forecast </h1>
      </div>
      {!forecast ? (
        <h1 className="text-white font-bold text-2xl pt-8 flex justify-center items-center">
          City not selected...
        </h1>
      ) : (
        <Slider {...settings} className="box-border">
          {forecast.time.map((date: Date, i: number) => {
            const temperature = forecast.temperature_2m_max[i].toFixed(0);
            // برای انتخاب آیکون با درنظر گرفتن وضعیت هوا و داینامیک شدن آدرس عکس بدون دستور شرطی
            const weatherCode = forecast.weather_code[i].toFixed(0);
            const weatherMap: Record<number, string> = {
              //  Clear sky
              0: "/icons/clearSky.jpg",

              // Mainly clear / partly cloudy
              1: "/icons/fewClouds.jpg",
              2: "/icons/fewClouds.jpg",

              // Overcast
              3: "/icons/brokenClouds.jpg",

              // Fog / mist
              45: "/icons/mist.jpg",
              48: "/icons/mist.jpg",

              // Drizzle
              51: "/icons/showerRain.jpg",
              53: "/icons/showerRain.jpg",
              55: "/icons/showerRain.jpg",

              // Rain
              61: "/icons/rain.jpg",
              63: "/icons/rain.jpg",
              65: "/icons/rain.jpg",

              // Snow
              71: "/icons/snow.jpg",
              73: "/icons/snow.jpg",
              75: "/icons/snow.jpg",
              77: "/icons/snow.jpg",

              // Rain showers
              80: "/icons/showerRain.jpg",
              81: "/icons/showerRain.jpg",
              82: "/icons/showerRain.jpg",

              // Snow showers
              85: "/icons/snow.jpg",
              86: "/icons/snow.jpg",

              // Thunderstorm
              95: "/icons/thunderstorm.jpg",
              96: "/icons/thunderstorm.jpg",
              99: "/icons/thunderstorm.jpg",
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
                    src={weatherMap[weatherCode] ?? "/icons/showerRain.jpg"}
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

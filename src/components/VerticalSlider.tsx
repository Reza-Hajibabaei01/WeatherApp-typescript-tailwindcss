// WeatherSlider.tsx
import { useEffect, useState } from "react";
import Slider from "react-slick";
import cities from "../data/cities.json";
import type { WeatherData } from "../type/type";
import { fetchWeatherByCoords } from "../server/ApiOtherCountries";

export default function WeatherSlider() {
  const [weatherList, setWeatherList] = useState<WeatherData[]>([]);

  // برای تنظم آیکون مناسب با هر وضعیت هوایی
  const getWeatherIcon = (description?: string) => {
    if (!description) {
      return "/icons/default.png";
    }

    if (description.includes("clear sky")) return "/icons/clearSky.jpg";

    if (description.includes("few clouds")) return "/icons/fewClouds.jpg";

    if (description.includes("scattered clouds"))
      return "/icons/scatteredClouds.jpg";

    if (description.includes("broken clouds")) return "/icons/brokenClouds.jpg";

    if (description.includes("shower rain")) return "/icons/showerRain.jpg";

    if (description.includes("thunderstorm")) return "/icons/thunderstorm.jpg";

    if (description.includes("snow")) return "/icons/snow.jpg";

    if (description.includes("mist")) return "/icons/mist.jpg";

    return "/icons/rain.jpg";
  };
  // برای دریافت دیتا کشور های مختلف در هر یک دقیقه
  useEffect(() => {
    let index = 0;
    const interval = setInterval(async () => {
      if (index >= cities.length) {
        clearInterval(interval);
        return;
      }
      const city = cities[index];
      try {
        const data = await fetchWeatherByCoords(
          Number(city.lat),
          Number(city.lon),
        );
        // برای دریافت دیتا و حذف دیتا های تکراری
        setWeatherList((prev) => {
          const exists = prev.some((c) => c.name === data.name);
          if (exists) return prev;
          return [...prev, data];
        });
      } catch (err) {
        console.error("fatch failed:", city.name);
      }
      index++;
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // تنظیمات اسلایدر
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  return (
    <Slider className="w-full h-full overflow-hidden" {...settings}>
      {weatherList.map((weather, index) => {
        // برای انتخاب آیکون مناسب هر وضعیت هوایی کشور های مختلف
        const description = weather.weather?.[0]?.description;
        const imageSrc = getWeatherIcon(description);
        //بزگ کردن حرف اول وضعیت هوا
        const upperCase =
          description?.charAt(0).toUpperCase() + description.slice(1);
        return (
          <div
            className="overflow-hidden select-none cursor-pointer"
            key={index}
          >
            <div className="bg-[#1E1E1E] border-2 border-[#363636] px-3 py-2 rounded-2xl flex justify-between items-center">
              <div className="w-1/3">
                <h2 className="text-white font-normal text-base whitespace-nowrap">
                  {weather?.name ?? "-----"}
                </h2>
                <h6 className="text-white text-sm">{upperCase}</h6>
              </div>
              <div className="w-1/3 flex justify-center items-center">
                <img className="w-15 h-15" src={imageSrc} alt={description} />
              </div>
              <div className="w-1/3  flex justify-center items-center">
                <h3 className="text-white font-medium text-xl">
                  {weather?.main.temp_max?.toFixed(0) ?? "--"}°C{" "}
                  <span className="text-[#8a8a8a] text-base">
                    /{weather?.main.temp_min?.toFixed(0) ?? "--"}°C
                  </span>
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}

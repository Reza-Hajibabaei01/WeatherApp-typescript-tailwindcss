import type { WeatherData } from "../type/type";

const API_KEY = "dec5e7b01cbb0354933380de97939855";

export const fetchWeatherDayForecast = async (
  lat: number,
  lon: number,
  cnt:number,
): Promise<WeatherData> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${cnt}&appid=${API_KEY}`,
  );

  if (!res.ok) {
    throw new Error("Weather fetch failed");
  }

  return res.json();
};

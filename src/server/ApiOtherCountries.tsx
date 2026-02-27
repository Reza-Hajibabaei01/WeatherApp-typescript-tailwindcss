import type { WeatherData } from "../type/type";

const API_KEY = "dec5e7b01cbb0354933380de97939855";

export const fetchWeatherByCoords = async (
  lat: number,
  lon: number,
): Promise<WeatherData> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`,
  );

  if (!res.ok) {
    throw new Error("Weather fetch failed");
  }

  return res.json();
};

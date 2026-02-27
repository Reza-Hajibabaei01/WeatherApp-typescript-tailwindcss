import { fetchWeatherApi } from "openmeteo";

export const getDailyWeather = async (lat: number, lon: number) => {
  const params = {
    latitude: lat,
    longitude: lon,
    daily: ["temperature_2m_max", "weather_code"],
    forecast_days: 16,
    timezone: "auto",
  };

  const responses = await fetchWeatherApi(
    "https://api.open-meteo.com/v1/forecast",
    params
  );

  const response = responses[0];
  const daily = response.daily()!;

  return {
    time: Array.from(
      { length: (Number(daily.timeEnd()) - Number(daily.time())) / daily.interval() },
      (_, i) =>
        new Date(
          (Number(daily.time()) +
            i * daily.interval() +
            response.utcOffsetSeconds()) * 1000
        )
    ),
    temperature_2m_max: daily.variables(0)!.valuesArray(),
    weather_code: daily.variables(1)!.valuesArray(),
  };
};

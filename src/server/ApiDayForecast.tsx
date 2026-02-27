import { fetchWeatherApi } from "openmeteo";

export const getDailyWeather = async (lat: number, lon: number) => {
  const params = {
    latitude: lat,
    longitude: lon,
    daily: ["temperature_2m_max", "temperature_2m_min", "weathercode"],
    forecast_days: 10,
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
    apparent_temperature: daily.variables(0)!.valuesArray(),
    weatherCode: daily.variables(1)!.valuesArray(),
  };
};

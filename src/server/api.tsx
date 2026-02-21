import axios from "axios";

const client = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const APIKey = "dec5e7b01cbb0354933380de97939855";

export async function getCurrentWeather({
  lat,
  lon,
}: {
  lat: string;
  lon: string;
}) {
  const { data } = await client(
    `/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`
  );
  return data;
}

export default getCurrentWeather;

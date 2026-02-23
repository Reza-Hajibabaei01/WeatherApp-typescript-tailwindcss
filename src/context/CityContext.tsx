import React, { createContext, useContext, useState, useEffect } from "react";
import type { City } from "../components/AutocompleteCity";
import { getCurrentWeather } from "../server/api";
import type { WeatherData } from "../type/server";

interface CityContextType {
  selectedCity: City | null;
  setSelectedCity: (city: City) => void;
  weatherData: WeatherData | null;
  loading: boolean;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedCity) return;

    setLoading(true);

    getCurrentWeather({
      lat: selectedCity.lat,
      lon: selectedCity.lon,
    })
      .then((res) => {
        setWeatherData(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCity]);

  return (
    <CityContext.Provider
      value={{
        selectedCity,
        setSelectedCity,
        weatherData,
        loading,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used inside CityProvider");
  }
  return context;
};

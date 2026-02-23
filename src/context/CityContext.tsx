import React, { createContext, useContext, useState } from "react";
import type { City } from "../components/AutocompleteCity";

interface CityContextType {
  selectedCity: City | null;
  setSelectedCity: React.Dispatch<React.SetStateAction<City | null>>;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity }}>
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

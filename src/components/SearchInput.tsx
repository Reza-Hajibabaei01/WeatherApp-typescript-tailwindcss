import React from "react";
import { AutocompleteCity } from "../context/AutocompleteCity";
import type { City } from "../context/AutocompleteCity";
import citiesJson from "../data/cities.json";
const cities: City[] = citiesJson;

const SearchInput: React.FC = () => {
  const handleSelect = (city: City) => {
    console.log("Selected city:", city);
  };

  return (
    <div>
      <AutocompleteCity cities={cities} onSelect={handleSelect} />
    </div>
  );
};

export default SearchInput;

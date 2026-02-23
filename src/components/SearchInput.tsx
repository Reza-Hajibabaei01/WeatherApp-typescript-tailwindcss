import React from "react";
import { AutocompleteCity } from "./AutocompleteCity";
import type { City } from "./AutocompleteCity";
import citiesJson from "../data/cities.json";
import { useCity } from "../context/CityContext";

const cities: City[] = citiesJson;

const SearchInput: React.FC = () => {
  const {setSelectedCity} = useCity()
  const handleSelect = (city: City) => {
    // داده هارو به والد میفرستیم
    setSelectedCity(city)
  };

  return (
    <div>
      <AutocompleteCity cities={cities} onSelect={handleSelect} />
    </div>
  );
};

export default SearchInput;


// interface SearchInputProps {
//   //  پروپی که کامپوننت والد میفرسته
//   onCitySelect: (city: City) => void;
// }



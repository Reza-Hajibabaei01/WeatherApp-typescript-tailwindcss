import React, { useEffect, useRef, useState } from 'react'


// مدل داده شهر که از API یا لیست ثابت دریافت می‌شود
export interface City{
  id: number;
  name: string;
  lat: string;
  lon: string;
}

// پراپرتی‌های ورودی کامپوننت autocomplete
interface AutocompleteCityProps {
  cities: City[];
  onSelect: (city: City) => void;
}


// کامپوننت جستجو و انتخاب شهر با قابلیت:
// - فیلتر زنده
// - انتخاب با کیبورد
// - بستن لیست با کلیک بیرون
export const AutocompleteCity: React.FC<AutocompleteCityProps> = ({ cities, onSelect }) => {
  
  // مقدار متن داخل input
    const [query, setQuery] = useState("");
  
    // لیست شهرهای فیلتر شده براساس متن جستجو
    const [filteredCities, setFilteredCities] = useState<City[]>([]);
  
    // اندیس آیتم فعال برای ناوبری با کیبورد
    const [activeIndex, setActiveIndex] = useState(-1);
  
    // رفرنس برای تشخیص کلیک خارج از کامپوننت
    const wrapperRef = useRef<HTMLDivElement>(null);

    // هر بار که متن جستجو تغییر کند:
    // لیست شهرها را براساس آن فیلتر می‌کنیم
  useEffect(() => {
    if (query === "") {
      setFilteredCities([]);
    } else {
      setFilteredCities(
        cities.filter(city =>
          // مقایسه بدون حساسیت به حروف بزرگ و کوچک
          city.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
    setActiveIndex(-1);
  }, [query, cities]);

  return (
    <div>AutocompleteCity</div>
  )
}

export default AutocompleteCity
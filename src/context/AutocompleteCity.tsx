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
  
  return (
    <div>AutocompleteCity</div>
  )
}

export default AutocompleteCity
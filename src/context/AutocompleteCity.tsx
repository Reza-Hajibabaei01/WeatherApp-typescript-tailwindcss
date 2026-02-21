import React, { useEffect, useRef, useState } from "react";

// مدل داده شهر که از API یا لیست ثابت دریافت می‌شود
export interface City {
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
export const AutocompleteCity: React.FC<AutocompleteCityProps> = ({
  cities,
  onSelect,
}) => {
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
        cities.filter((city) =>
          // مقایسه بدون حساسیت به حروف بزرگ و کوچک
          city.name.toLowerCase().includes(query.toLowerCase()),
        ),
      );
    }
    setActiveIndex(-1);
  }, [query, cities]);

  // بستن dropdown هنگام کلیک بیرون از کامپوننت
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setFilteredCities([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    // حذف event listener هنگام unmount برای جلوگیری از memory leak
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // وقتی کاربر یک شهر را انتخاب می‌کند:
  // - مقدار input تنظیم می‌شود
  // - لیست بسته می‌شود
  // - مقدار انتخاب شده به کامپوننت والد ارسال می‌شود
  const handleSelect = (city: City) => {
    setQuery(city.name);
    setFilteredCities([]);
    onSelect(city);
  };

  // مدیریت ناوبری کیبورد:
  // ArrowUp / ArrowDown برای حرکت
  // Enter برای انتخاب
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredCities.length === 0) return;

    if (e.key === "ArrowDown") {
      // استفاده از modulo برای اینکه اگر به انتهای لیست رسیدیم
      // دوباره به ابتدای لیست برگردیم
      setActiveIndex((prev) => (prev + 1) % filteredCities.length);
    } else if (e.key === "ArrowUp") {
      setActiveIndex(
        (prev) => (prev - 1 + filteredCities.length) % filteredCities.length,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) handleSelect(filteredCities[activeIndex]);
    }
  };

  return (
    <div className="relative " ref={wrapperRef}>
      <input
        className="bg-[#1E1E1E] outline-none w-90 h-10 text-[#8a8a8a] py-1 pl-6 pr-21.5 items-center rounded-[36px]"
        type="text"
        placeholder="Search your location ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {filteredCities.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            border: "1px solid #8a8a8a",
            maxHeight: 150,
            overflowY: "auto",
            backgroundColor: "#fff",
            zIndex: 99,
            borderRadius: 10,
          }}
        >
          {filteredCities.map((city, index) => (
            <div
              key={city.id}
              onClick={() => handleSelect(city)}
              style={{
                color: "#8a8a8a",
                padding: 3,
                paddingLeft: 10,
                cursor: "pointer",
                backgroundColor: index === activeIndex ? "#272727" : "#1E1E1E",
              }}
            >
              {city.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

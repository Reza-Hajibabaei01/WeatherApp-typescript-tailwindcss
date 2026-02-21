import CurrentWeatherCard from "./currentWeatherCard";
import WeatherHighlightsCard from "./WeatherHighlightsCard";
import ForecastCard from "./ForecastCard";
import OtherCountriesCard from "./OtherCountriesCard";

function WeatherOverviewSection() {
  return (
    <>
      <div className="flex columns-2 gap-5">
        <div className="w-139 space-y-4">
          <CurrentWeatherCard />
          <WeatherHighlightsCard />
        </div>
        <div className="w-166 space-y-4">
          <ForecastCard />
          <OtherCountriesCard />
        </div>
      </div>
    </>
  );
}

export default WeatherOverviewSection;

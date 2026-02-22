import CurrentWeatherCard from "./CurrentWeatherCard";
import WeatherHighlightsCard from "./WeatherHighlightsCard";
import ForecastCard from "./ForecastCard";
import OtherCountriesCard from "./OtherCountriesCard";

function WeatherOverviewSection() {
  return (
    <>
      <div className="flex columns-2 gap-5">
        <div className="w-139 space-y-4">
          <CurrentWeatherCard />
          <OtherCountriesCard />
        </div>
        <div className="w-166 space-y-4">
          <ForecastCard />
          <WeatherHighlightsCard />
        </div>
      </div>
    </>
  );
}

export default WeatherOverviewSection;

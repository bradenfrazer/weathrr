import {
  capitalize,
  formatTemp,
  getDirection,
  metersToMiles,
} from "../helpers";
import { WeatherData } from "../types";
import { WeatherTile } from "./WeatherTile";

interface WeatherDisplayProps {
  data: WeatherData;
}

export const WeatherDisplay = ({ data }: WeatherDisplayProps) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="grid gap-8 text-center">
        <div className="grid gap-2">
          <p className="flex items-end justify-center gap-2">
            <span className="text-3xl font-semibold">{data.city},</span>
            <span className="text-lg">{data.country}</span>
          </p>
          <p className="text-slate-50/50">{capitalize(data.condition)}</p>
        </div>
        <div className="grid gap-2">
          <p className="flex items-start justify-center gap-2 font-semibold">
            <span className="text-7xl">
              {formatTemp(data.temperature.current)}
            </span>
            <span className="text-4xl">F</span>
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-50/50 sm:gap-4">
            <span>Low {formatTemp(data.temperature.low)}</span>
            <span className="hidden sm:block">•</span>
            <span>High {formatTemp(data.temperature.high)}</span>
            <span className="hidden sm:block">•</span>
            <span>Feels like {formatTemp(data.temperature.feels_like)}</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <WeatherTile
            label="Humidity"
            value={data.humidity.toString()}
            unit="%"
          />
          <WeatherTile
            label="Pressure"
            value={data.pressure.toString()}
            unit="hPa"
          />
          <WeatherTile
            label="Visibility"
            value={Math.round(metersToMiles(data.visibility)).toString()}
            unit="mi"
          />
          <WeatherTile
            label="Wind"
            value={`${getDirection(data.wind.deg)} ${Math.round(
              data.wind.speed,
            ).toString()}`}
            unit="MPH"
          />
        </div>
      </div>
    </div>
  );
};

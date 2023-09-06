import { WeatherData } from "../types";

interface WeatherDisplayProps {
  data: WeatherData;
}

export const WeatherDisplay = ({ data }: WeatherDisplayProps) => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <p>City: {data.city}</p>
      <p>Country: {data.country}</p>
      <p>Temp: {data.temperature.toString()}</p>
    </div>
  );
};

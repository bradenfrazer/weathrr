import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Form } from "./Form";
import { WeatherDisplay } from "./WeatherDisplay";
import { TemperatureDescription, WeatherData } from "../types";

const getVariant = (temp: number) => {
  if (temp >= 100) {
    return "scorching";
  } else if (temp <= 99 && temp >= 80) {
    return "hot";
  } else if (temp <= 79 && temp >= 65) {
    return "fair";
  } else if (temp <= 64 && temp >= 50) {
    return "chilly";
  } else if (temp <= 49 && temp >= 32) {
    return "cold";
  } else if (temp <= 31) {
    return "freezing";
  } else {
    return undefined;
  }
};

const panelBackgroundStyles = (variant: TemperatureDescription | undefined) => {
  switch (variant) {
    case "freezing":
      return "from-indigo-400/75 to-blue-700/75";
    case "cold":
      return "from-blue-400/75 to-cyan-800/75";
    case "chilly":
      return "from-cyan-400/75 to-teal-700/75";
    case "fair":
      return "from-lime-500/75 to-lime-800/75";
    case "hot":
      return "from-yellow-600/75 to-orange-900/75";
    case "scorching":
      return "from-red-700/75 to-rose-950/75";
    default:
      return "from-slate-800/50 to-slate-900/50";
  }
};

export const Panel = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [panelVariant, setPanelVariant] = useState<
    TemperatureDescription | undefined
  >(undefined);

  useEffect(() => {
    if (weatherData)
      setPanelVariant(getVariant(weatherData.temperature.current));
  }, [weatherData]);

  return (
    <Container
      className={`grid basis-7/12 gap-16 bg-gradient-to-b ${panelBackgroundStyles(
        panelVariant,
      )}`}
    >
      <Form onChange={setWeatherData} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </Container>
  );
};

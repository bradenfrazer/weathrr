import { useState } from "react";
import { Container } from "./Container";
import { Form } from "./Form";
import { WeatherDisplay } from "./WeatherDisplay";
import { WeatherData } from "../types";

export const Panel = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  return (
    <Container className="grid basis-7/12 gap-16 bg-slate-800/75">
      <Form onChange={setWeatherData} />
      {weatherData && <WeatherDisplay data={weatherData} />}
    </Container>
  );
};

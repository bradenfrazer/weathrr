import { useEffect, useState } from "react";
import { Container } from "./Container";
import { Form } from "./Form";
import { WeatherDisplay } from "./WeatherDisplay";
import { WeatherData } from "../types";

export const Panel = () => {
  const API_KEY = "c38196957619ead2e5a891ff07fb6b6b";
  const country = "USA";
  const city = "Dallas";

  const [data, setData] = useState<WeatherData | null>(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`,
    )
      .then((response) => response.json())
      .then((data) => {
        if (city && country)
          setData({
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
          });
      });
  }, [city, country]);

  return (
    <Container className="grid basis-7/12 gap-16 bg-slate-800/75">
      <Form />
      {data && <WeatherDisplay data={data} />}
    </Container>
  );
};

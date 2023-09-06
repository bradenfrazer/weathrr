import { useEffect, useState } from "react";
import { FormInput } from "./FormInput";
import { Button } from "./ui/Button";
import { WeatherData, WeatherFormData } from "../types";

interface FormProps {
  onChange: (args: WeatherData) => void;
}

export const Form = ({ onChange }: FormProps) => {
  const API_KEY = "c38196957619ead2e5a891ff07fb6b6b";

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [formData, setFormData] = useState<WeatherFormData | null>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setFormData({
      city: city,
      country: country,
    });
  };

  useEffect(() => {
    if (formData) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`,
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          onChange({
            city: data.name,
            country: data.sys.country,
            temperature: {
              current: data.main.temp,
              high: data.main.temp_max,
              low: data.main.temp_min,
              feels_like: data.main.feels_like,
            },
            condition: data.weather[0].description,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind: {
              deg: data.wind.deg,
              speed: data.wind.speed,
            },
            visibility: data.visibility,
          });
        });
    }
  }, [formData]);

  return (
    <form
      className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-end"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full flex-col gap-8 sm:flex-row">
        <FormInput
          field="city"
          value={city}
          onChange={(event: any) => setCity(event.target.value)}
        />
        <FormInput
          field="country"
          value={country}
          onChange={(event: any) => setCountry(event.target.value)}
        />
      </div>
      <div>
        <Button type="submit" disabled={!city || !country}>
          Submit
        </Button>
      </div>
    </form>
  );
};

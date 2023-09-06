export type WeatherFormData = {
  city: string;
  state?: string;
  country?: string;
};

export type WeatherData = {
  city: string;
  country: string;
  temperature: {
    current: number;
    high: number;
    low: number;
    feels_like: number;
  };
  condition: string;
  humidity: number;
  pressure: number;
  wind: {
    deg: number;
    speed: number;
  };
  visibility: number;
};

export type TemperatureDescription =
  | "freezing"
  | "cold"
  | "chilly"
  | "fair"
  | "hot"
  | "scorching";

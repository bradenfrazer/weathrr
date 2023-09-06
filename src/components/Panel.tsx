import { useState } from "react";
import { Container } from "./Container";
import { Form } from "./Form";
import { WeatherDisplay } from "./WeatherDisplay";

export const Panel = () => {
  const [data, setData] = useState(false);

  return (
    <Container className="grid basis-7/12 gap-16 bg-slate-800/75">
      <Form />
      {data && <WeatherDisplay />}
    </Container>
  );
};

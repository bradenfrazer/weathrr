import { Container } from "./Container";

export const Title = () => {
  return (
    <Container className="basis-5/12 gap-4 bg-title-bg bg-center text-center">
      <h1 className="text-6xl">Weathrr</h1>
      <h2 className="text-lg">
        Get the current temperature, conditions, and more...
      </h2>
    </Container>
  );
};

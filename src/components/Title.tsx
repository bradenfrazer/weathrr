import { Container } from "./Container";

export const Title = () => {
  return (
    <Container className="basis-5/12 gap-4 bg-title-bg bg-[50%_66%] text-center xl:bg-center">
      <h1 className="text-4xl drop-shadow-lg lg:text-6xl">
        <a href="/">Weathrr</a>
      </h1>
      <h2 className="drop-shadow-md lg:text-lg">
        Get the current temperature, conditions, and more...
      </h2>
    </Container>
  );
};

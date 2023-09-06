export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const formatTemp = (t: number) => Math.round(t).toString() + "°";

export const metersToMiles = (m: number) => m * 0.000621371192;

export const getDirection = (angle: number) => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
  return directions[index];
};

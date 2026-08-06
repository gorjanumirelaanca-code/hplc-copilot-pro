export function estimatePressure(
  flowRate: number,
  columnLength: number,
  particleSize: number
) {

  const pressure =
    (flowRate *
      columnLength *
      120) /
    particleSize;

  return Math.round(pressure);

}
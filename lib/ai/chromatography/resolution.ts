export function estimateResolution(
  plates: number,
  alpha: number,
  kPrime: number
) {

  return (
    (Math.sqrt(plates) / 4) *
    ((alpha - 1) / alpha) *
    (kPrime / (1 + kPrime))
  );

}
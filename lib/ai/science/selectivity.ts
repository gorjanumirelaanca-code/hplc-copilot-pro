export function calculateSelectivity(
  k1: number,
  k2: number
) {
  if (k2 <= k1) return 1;

  return k2 / k1;
}
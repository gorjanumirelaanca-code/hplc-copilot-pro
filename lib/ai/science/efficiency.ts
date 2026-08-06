export function calculatePlateNumber(
  retentionTime: number,
  peakWidth: number
) {
  return (
    16 *
    Math.pow(retentionTime / peakWidth, 2)
  );
}
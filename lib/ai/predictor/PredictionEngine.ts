export interface PredictionInput {
  logP: number;
  pKa: number;
  flowRate: number;
  temperature: number;
  organicPercent: number;
}

export interface PredictionResult {
  retention: number;
  pressure: number;
  resolution: number;
  tailing: number;
  confidence: number;
}

export function predict(
  input: PredictionInput
): PredictionResult {

  const retention =
    Math.max(
      1,
      input.logP * 1.5 -
      input.organicPercent / 20
    );

  const pressure =
    Math.round(
      input.flowRate *
      180
    );

  const resolution =
    Number(
      (
        2.5 -
        (input.flowRate - 1) * 0.4
      ).toFixed(2)
    );

  const tailing =
    Number(
      (
        1.05 +
        Math.abs(input.pKa - 3) * 0.05
      ).toFixed(2)
    );

  return {

    retention,

    pressure,

    resolution,

    tailing,

    confidence: 88,

  };

}
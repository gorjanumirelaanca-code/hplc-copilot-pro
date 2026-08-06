export interface RetentionPrediction {
  expectedRetention: string;
  kPrime: number;
  confidence: string;
}

export function predictRetention(
  logP: number,
  pKa: number
): RetentionPrediction {

  let kPrime = 2;

  if (logP > 4) kPrime = 8;
  else if (logP > 3) kPrime = 6;
  else if (logP > 2) kPrime = 4;
  else if (logP > 1) kPrime = 2.5;
  else kPrime = 1.2;

  let retention = "Moderate";

  if (kPrime < 2)
    retention = "Low";

  if (kPrime > 5)
    retention = "High";

  return {

    expectedRetention: retention,

    kPrime,

    confidence: "Medium",

  };

}
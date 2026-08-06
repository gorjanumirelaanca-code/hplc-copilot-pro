export interface ScientificAssessment {

  retention: string;

  peakShape: string;

  risk: string[];

  recommendations: string[];

}

export function assessMethod(data: any): ScientificAssessment {

  const logP = Number(data.logP ?? 0);
  const pKa = Number(data.pKa ?? 0);

  const risk: string[] = [];
  const recommendations: string[] = [];

  let retention = "Moderate";
  let peakShape = "Good";

  if (logP < 1) {
    retention = "Weak";
    recommendations.push(
      "Increase aqueous content or consider HILIC."
    );
  }

  if (logP > 4) {
    retention = "Strong";
    recommendations.push(
      "Increase organic content to reduce run time."
    );
  }

  if (pKa > 0 && pKa < 5) {
    recommendations.push(
      "Operate at pH 2.5–3.0 to suppress ionization."
    );
  }

  if (pKa > 8) {
    recommendations.push(
      "Consider high-pH stable columns if required."
    );
  }

  if (logP > 5) {
    risk.push(
      "Possible excessive retention."
    );
  }

  if (logP < 0) {
    risk.push(
      "Possible poor retention on RP-HPLC."
    );
  }

  return {

    retention,

    peakShape,

    risk,

    recommendations

  };

}
export interface ReasoningInput {
  compound: string;
  pKa: number;
  logP: number;
  column: string;
  mobilePhase: string;
  pH: number;
}

export interface ReasoningOutput {
  summary: string;
  reasoning: string[];
  confidence: number;
}

export function generateScientificReasoning(
  input: ReasoningInput
): ReasoningOutput {

  const reasoning: string[] = [];

  if (input.logP > 3) {
    reasoning.push(
      "High logP indicates a hydrophobic analyte with strong reversed-phase retention."
    );
  } else if (input.logP > 1) {
    reasoning.push(
      "Moderate hydrophobicity suggests balanced retention on a C18 column."
    );
  } else {
    reasoning.push(
      "Low logP indicates a polar analyte that may exhibit weak reversed-phase retention."
    );
  }

  if (input.pKa < 5) {
    reasoning.push(
      `Operating below the pKa (${input.pKa}) suppresses ionization, increasing retention and often improving peak shape.`
    );
  } else if (input.pKa > 8) {
    reasoning.push(
      `A basic analyte may require low-pH mobile phases to reduce silanol interactions and peak tailing.`
    );
  } else {
    reasoning.push(
      "Evaluate pH carefully because partial ionization can significantly affect selectivity."
    );
  }

  reasoning.push(
    `Recommended stationary phase: ${input.column}.`
  );

  reasoning.push(
    `Suggested mobile phase: ${input.mobilePhase}.`
  );

  reasoning.push(
    `Recommended working pH: ${input.pH}.`
  );

  return {

    summary:
      "Scientific reasoning completed.",

    reasoning,

    confidence: 92,

  };

}
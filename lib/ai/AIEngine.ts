export type AIModule =
  | "assistant"
  | "method"
  | "troubleshooting"
  | "validation"
  | "chromatogram";

export function buildPrompt(
  module: AIModule,
  input: string
) {
  switch (module) {
    case "assistant":
      return `
You are an HPLC expert.

${input}
`;

    case "method":
      return `
Generate an HPLC method.

${input}
`;

    case "troubleshooting":
      return `
Diagnose the chromatographic problem.

${input}
`;

    case "validation":
      return `
Validate this HPLC method.

${input}
`;

    case "chromatogram":
      return `
Interpret this chromatogram.

${input}
`;

    default:
      return input;
  }
}
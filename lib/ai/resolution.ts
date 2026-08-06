export interface ResolutionInput {

  k1: number;

  k2: number;

  plates: number;

}

export interface ResolutionResult {

  alpha: number;

  rs: number;

}

export function calculateResolution(
  input: ResolutionInput
): ResolutionResult {

  const alpha = input.k2 / input.k1;

  const rs =
    (Math.sqrt(input.plates) / 4) *
    ((alpha - 1) / alpha) *
    (input.k2 / (1 + input.k2));

  return {

    alpha: Number(alpha.toFixed(2)),

    rs: Number(rs.toFixed(2))

  };

}
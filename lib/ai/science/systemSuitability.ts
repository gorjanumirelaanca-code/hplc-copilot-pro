export interface SystemSuitability {

  resolution: number;

  plates: number;

  tailing: number;

  pressure: number;

}

export function evaluateSystem(
  resolution: number,
  plates: number,
  tailing: number,
  pressure: number
): SystemSuitability {

  return {

    resolution,

    plates,

    tailing,

    pressure,

  };

}
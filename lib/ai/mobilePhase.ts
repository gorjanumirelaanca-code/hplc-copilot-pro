export interface MobilePhase {

  organic: number;

  pH: number;

  bufferStrength: number;

}

export function solventStrength(
  mobilePhase: MobilePhase
) {

  return (100 - mobilePhase.organic) / 100;

}

export function pHEffect(

  pKa: number,

  pH: number

) {

  const ionized =
    1 /
    (1 + Math.pow(10, pKa - pH));

  return 1 - ionized;

}
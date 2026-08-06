export interface MethodScore {
  overall: number;
  column: number;
  mobilePhase: number;
  gradient: number;
  flowRate: number;
  temperature: number;
  robustness: number;
  validation: number;
}

export function calculateMethodScore(): MethodScore {

  return {

    overall: 94,

    column: 10,

    mobilePhase: 9,

    gradient: 10,

    flowRate: 10,

    temperature: 9,

    robustness: 8,

    validation: 10,

  };

}
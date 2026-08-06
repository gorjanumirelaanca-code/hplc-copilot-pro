import {
  Molecule,
  Method,
  predictRetention
} from "./retentionPredictor";

import {
  calculateMethodScore
} from "./methodScorer";

import {
  recommendColumn
} from "./columnSelector";

import {
  recommendMobilePhase
} from "./mobilePhaseOptimizer";

export interface MethodEngineResult {

  prediction: ReturnType<typeof predictRetention>;

  score: number;

  column: ReturnType<typeof recommendColumn>;

  mobilePhase: ReturnType<typeof recommendMobilePhase>;

}

export function runMethodEngine(

  molecule: Molecule,

  method: Method

): MethodEngineResult {

  const prediction =
    predictRetention(
      molecule,
      method
    );

  const score =
    calculateMethodScore(
      molecule,
      method
    );

  const column =
    recommendColumn(
      molecule
    );

  const mobilePhase =
    recommendMobilePhase(
      molecule
    );

  return {

    prediction,

    score,

    column,

    mobilePhase

  };

}
import { Molecule, Method } from "./retentionPredictor";
import { runMethodEngine } from "./methodEngine";
import { recommendGradient } from "./gradientOptimizer";
import { recommendPH } from "./pHOptimizer";
import { predictSystemSuitability } from "./systemSuitability";
import { generateAdvice } from "./aiAdvisor";

export interface MethodEngineV2 {

  engine: ReturnType<typeof runMethodEngine>;

  gradient: ReturnType<typeof recommendGradient>;

  pH: ReturnType<typeof recommendPH>;

  system: ReturnType<typeof predictSystemSuitability>;

  advice: string[];

}

export function runMethodEngineV2(

  molecule: Molecule,

  method: Method

): MethodEngineV2 {

  return {

    engine:
      runMethodEngine(
        molecule,
        method
      ),

    gradient:
      recommendGradient(
        molecule
      ),

    pH:
      recommendPH(
        molecule
      ),

    system:
      predictSystemSuitability(
        molecule,
        method
      ),

    advice:
      generateAdvice(
        molecule,
        method
      )

  };

}
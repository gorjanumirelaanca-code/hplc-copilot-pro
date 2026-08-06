import { Molecule, Method } from "./retentionPredictor";
import { runMethodEngineV2 } from "./methodEngineV2";

export interface MethodEngineV3 {

  result: ReturnType<typeof runMethodEngineV2>;

  laboratoryReady: boolean;

  confidence: number;

  summary: string;

}

export function runMethodEngineV3(

  molecule: Molecule,

  method: Method

): MethodEngineV3 {

  const result = runMethodEngineV2(

    molecule,

    method

  );

  const confidence =

    result.system.pass

      ? result.engine.score

      : Math.max(result.engine.score - 10, 0);

  const laboratoryReady =

    confidence >= 85 &&

    result.system.pass;

  const summary = laboratoryReady

    ? "Recommended as a starting laboratory method. Experimental verification is still required."

    : "Further optimization is recommended before laboratory evaluation.";

  return {

    result,

    laboratoryReady,

    confidence,

    summary

  };

}
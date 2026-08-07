import { runMethodEngine } from "./methodEngine";


export function runMethodEngineV2(

  molecule: any = {},

  method: any = {}

) {


  const base = runMethodEngine(

    molecule,

    method

  );



  const score = base.score ?? 85;



  return {


    prediction:

      base.prediction,


    score,


    confidence:

      Math.min(

        100,

        Math.round(score)

      ),



    engine: {


      prediction:

        base.prediction,


      score,


      confidence:

        Math.min(

          100,

          Math.round(score)

        ),


      column:

        base.column,


      mobilePhase:

        base.mobilePhase


    },



    column:

      base.column,



    mobilePhase:

      base.mobilePhase,


    status:

      "optimized"


  };


}



export default runMethodEngineV2;
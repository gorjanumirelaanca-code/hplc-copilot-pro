import { runMethodEngineV2 } from "./methodEngineV2";


export function runMethodEngineV3(

  molecule: any = {},

  method: any = {}

) {


  const result = runMethodEngineV2(

    molecule,

    method

  );



  return {


    ...result,


    engine: {


      ...result.engine,


      score:

        result.engine.score,


      confidence:

        result.engine.confidence


    },


    version:

      "V3"


  };


}



export default runMethodEngineV3;
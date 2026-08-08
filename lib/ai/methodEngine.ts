export interface MethodEngineResult {

  prediction: {

    retentionTime: number;

    resolution: number;

    tailingFactor: number;

    capacityFactor: number;

    peakWidth: number;

    selectivity: number;

  };

  score: number;

  column: {

    column: string;

    particle: string;

    dimensions: string;

  };

  mobilePhase: {

    organic: string;

    buffer: string;

    pH: number;

  };

}



export function runMethodEngine(

  molecule: any = {},

  method: any = {}

): MethodEngineResult {


  const logP = Number(molecule.xlogP ?? molecule.logP ?? 2);

  const tpsa = Number(molecule.tpsa ?? 40);

  const molecularWeight = Number(molecule.molecularWeight ?? 250);

  const pKa = Number(molecule.pKa ?? 5);


  /*
    Column selection logic
  */

  let column = "C18 Reversed Phase";

  let particle = "5 µm";

  let dimensions = "150 × 4.6 mm";


  if (logP < 1 && tpsa > 70) {

    column = "HILIC";

    particle = "3 µm";

    dimensions = "100 × 2.1 mm";

  }


  /*
    Mobile phase selection
  */

  const organic =

    logP > 3

      ? "Acetonitrile"

      : "Methanol";


  /*
    pH recommendation
  */

  const recommendedPH =

    pKa < 4

      ? 3

      : pKa > 8

        ? 8

        : 6.5;



  const organicPercent =

    Number(method.organic ?? 50);



  /*
    Retention prediction
  */

  const retentionTime =

    1.5 +

    logP * 1.1 +

    tpsa / 100 -

    organicPercent / 120;



  const prediction = {


    retentionTime:

      Number(retentionTime.toFixed(2)),


    resolution:

      Number(

        (1.8 + tpsa / 120).toFixed(2)

      ),


    tailingFactor:

      Number(

        (1.05 + molecularWeight / 6000).toFixed(2)

      ),


    capacityFactor:

      Number(

        (retentionTime / 0.5).toFixed(2)

      ),


    peakWidth:

      Number(

        (retentionTime * 0.08).toFixed(2)

      ),


    selectivity:

      Number(

        (1 + Math.abs(logP) / 12).toFixed(2)

      )

  };



  const score = Math.min(

    100,

    Math.round(

      70 +

      prediction.resolution * 6 -

      prediction.tailingFactor * 5

    )

  );



  return {


    prediction,


    score,


    column: {

      column,

      particle,

      dimensions

    },


    mobilePhase: {

      organic,

      buffer:

        "Phosphate Buffer",


      pH:

        recommendedPH

    }

  };

}



export const recommendMethod = runMethodEngine;
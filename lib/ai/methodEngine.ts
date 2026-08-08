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


  gradient: {

    start: string;

    end: string;

    time: string;

  };

}



export function runMethodEngine(

  molecule: any = {},

  method: any = {}

): MethodEngineResult {


  const logP = molecule.xlogP ?? molecule.logP ?? 2;

  const tpsa = molecule.tpsa ?? 40;

  const molecularWeight =
    molecule.molecularWeight ?? 250;


  const organic =
    method.organic ?? 50;



  const retentionTime =

    2 +

    logP * 1.2 -

    organic / 100;



  const prediction = {


    retentionTime:

      Number(retentionTime.toFixed(2)),


    resolution:

      Number(

        (1.8 + tpsa / 100)

        .toFixed(2)

      ),


    tailingFactor:

      Number(

        (1.1 + molecularWeight / 5000)

        .toFixed(2)

      ),


    capacityFactor:

      Number(

        (retentionTime / 0.5)

        .toFixed(2)

      ),


    peakWidth:

      Number(

        (retentionTime * 0.08)

        .toFixed(2)

      ),


    selectivity:

      Number(

        (1 + Math.abs(logP) / 10)

        .toFixed(2)

      )

  };



  const score = Math.min(

    100,

    Math.round(

      70 +

      prediction.resolution * 5 -

      prediction.tailingFactor * 5

    )

  );



  const gradient = {


    start:

      organic > 60

      ? "60% Organic"

      : "30% Organic",


    end:

      organic > 60

      ? "90% Organic"

      : "80% Organic",


    time:

      molecularWeight > 500

      ? "25 min"

      : "15 min"

  };



  return {


    prediction,


    score,



    column: {


      column:

        "C18 Reversed Phase",


      particle:

        "5 µm",


      dimensions:

        "150 × 4.6 mm"

    },



    mobilePhase: {


      organic:

        organic > 60

        ? "Acetonitrile"

        : "Methanol",



      buffer:

        "Phosphate Buffer",



      pH:

        molecule.pKa < 5

        ? 3

        : 6.5

    },



    gradient

  };

}



export const recommendMethod = runMethodEngine;
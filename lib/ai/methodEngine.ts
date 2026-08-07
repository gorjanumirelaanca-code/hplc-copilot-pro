export function runMethodEngine(input:any) {


  const {

    molecularWeight = 250,

    logP = 2,

    pKa = 4.5,

    tpsa = 40

  } = input;



  const prediction = {

    retentionTime:

      Number((2 + logP * 1.2).toFixed(2)),

    resolution:

      Number((1.8 + tpsa / 100).toFixed(2)),

    tailingFactor:

      Number((1.1 + molecularWeight / 2000).toFixed(2))

  };



  const score = Math.min(

    100,

    Math.round(

      70 +

      logP * 5 +

      tpsa / 10

    )

  );



  const column = {

    column:

      logP > 3

      ? "C18 Reversed Phase"

      : "Phenyl-Hexyl Column",

    particle:

      "5 µm",

    dimensions:

      "150 × 4.6 mm"

  };



  const mobilePhase = {

    organic:

      logP > 3

      ? "Acetonitrile"

      : "Methanol",


    buffer:

      pKa < 5

      ? "Phosphate Buffer"

      : "Ammonium Formate",


    pH:

      pKa < 5

      ? 3.0

      : 6.5

  };



  return {


    prediction,


    score,


    column,


    mobilePhase


  };


}


// Compatibility export used by API routes

export const recommendMethod = runMethodEngine;
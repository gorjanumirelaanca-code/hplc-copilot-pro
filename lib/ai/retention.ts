export interface Molecule {

  name?: string;

  molecularWeight?: number;

  logP?: number;

  pKa?: number;

  tpsa?: number;

  hBondDonors?: number;

  hBondAcceptors?: number;

  smiles?: string;

  iupacName?: string;

  formula?: string;

}



export interface CompoundProperties extends Molecule {}



export interface Method {

  organic?: number;

  flow?: number;

  temperature?: number;

  pH?: number;

}



export interface MethodConditions extends Method {}



export interface RetentionPrediction {

  retentionTime: number;

  kPrime: number;

  k: number;

  capacityFactor: number;

  peakWidth: number;

  tailing: number;

  resolution: number;

  pressure: number;

  selectivity: number;

}



export function predictRetention(

  molecule: Molecule = {},

  method: Method = {}

): RetentionPrediction {


  const logP = molecule.logP ?? 2;

  const organic = method.organic ?? 50;

  const flow = method.flow ?? 1.0;



  const retentionTime =

    2 +

    logP * 1.2 -

    organic / 100;



  const capacityFactor =

    Number((retentionTime / 0.5).toFixed(2));



  const kPrime = capacityFactor;



  const peakWidth =

    Number((retentionTime * 0.08).toFixed(2));



  const tailing =

    Number(

      (1.1 + ((molecule.molecularWeight ?? 250) / 5000)).toFixed(2)

    );



  const resolution =

    Number(

      (1.8 + ((molecule.tpsa ?? 40) / 100)).toFixed(2)

    );



  const pressure =

    Number(

      (150 + flow * 80).toFixed(0)

    );



  const selectivity =

    Number(

      (1 + Math.abs(logP) / 10).toFixed(2)

    );



  return {


    retentionTime:

      Number(retentionTime.toFixed(2)),


    kPrime,


    k:

      kPrime,


    capacityFactor,


    peakWidth,


    tailing,


    resolution,


    pressure,


    selectivity


  };

}



export function calculateRetention(

  molecule: Molecule = {},

  method: Method = {}

): RetentionPrediction {


  return predictRetention(

    molecule,

    method

  );

}
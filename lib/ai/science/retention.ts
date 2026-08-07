export interface RetentionInput {

  logP?: number;

  organic?: number;

  temperature?: number;

}



export interface RetentionResult {

  retentionTime: number;

  kPrime: number;

  k: number;

}



export function predictRetention(

  input: RetentionInput = {}

): RetentionResult {


  const logP = input.logP ?? 2;

  const organic = input.organic ?? 50;

  const temperature = input.temperature ?? 30;



  const retentionTime =

    2 +

    logP * 1.2 -

    organic / 100 +

    (30 - temperature) * 0.01;



  return {


    retentionTime:

      Number(retentionTime.toFixed(2)),


    kPrime:

      Number(retentionTime.toFixed(2)),


    k:

      Number(retentionTime.toFixed(2))


  };


}



export function calculateRetention(

  input: RetentionInput = {}

): RetentionResult {


  return predictRetention(input);


}
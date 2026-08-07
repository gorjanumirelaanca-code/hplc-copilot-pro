export interface GradientMethod {

  organic?: number;

  flow?: number;

  temperature?: number;

  time?: number;

  pH?: number;

}



export interface GradientResult {

  gradient: string;

  organicStart: number;

  organicEnd: number;

  flow: number;

  temperature: number;

  recommendation: string;

}



export function optimizeGradient(

  input: GradientMethod = {},

  conditions?: GradientMethod

): GradientResult {


  const method = {

    ...input,

    ...(conditions || {})

  };



  const organic = method.organic ?? 50;

  const flow = method.flow ?? 1.0;

  const temperature = method.temperature ?? 30;



  const organicStart = Math.max(

    5,

    organic - 20

  );



  const organicEnd = Math.min(

    95,

    organic + 20

  );



  return {


    gradient:

      `${organicStart}% to ${organicEnd}% organic over 20 min`,


    organicStart,


    organicEnd,


    flow,


    temperature,


    recommendation:

      "Gradient optimized to improve retention and resolution."

  };


}



export function generateGradient(

  input: GradientMethod = {},

  conditions?: GradientMethod

): GradientResult {


  return optimizeGradient(

    input,

    conditions

  );


}
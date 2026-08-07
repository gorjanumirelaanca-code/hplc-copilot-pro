export interface SystemSuitabilityInput {

  resolution?: number;

  tailingFactor?: number;

  plates?: number;

  retentionTime?: number;

  pressure?: number;

}



export interface SystemSuitabilityResult {

  pass: boolean;

  resolution: number;

  tailingFactor: number;

  plates: number;

  retentionTime: number;

  pressure: number;

  comments: string[];

  warnings: string[];

  message: string;

}



export function predictSystemSuitability(

  input: SystemSuitabilityInput = {}

): SystemSuitabilityResult {


  const resolution = input.resolution ?? 2.0;

  const tailingFactor = input.tailingFactor ?? 1.2;

  const plates = input.plates ?? 5000;

  const retentionTime = input.retentionTime ?? 5.0;

  const pressure = input.pressure ?? 250;



  const comments: string[] = [];

  const warnings: string[] = [];



  if (resolution < 1.5) {

    comments.push(

      "Resolution is below recommended acceptance criteria."

    );

    warnings.push(

      "Improve selectivity or optimize mobile phase conditions."

    );

  }



  if (tailingFactor > 2.0) {

    comments.push(

      "Peak tailing is above recommended limit."

    );

    warnings.push(

      "Investigate column condition and sample chemistry."

    );

  }



  if (plates < 2000) {

    comments.push(

      "Column efficiency is low."

    );

    warnings.push(

      "Check column performance and system efficiency."

    );

  }



  if (pressure > 400) {

    comments.push(

      "System pressure is high."

    );

    warnings.push(

      "Inspect flow path, frits, tubing, and column blockage."

    );

  }



  if (comments.length === 0) {

    comments.push(

      "System suitability parameters are within expected range."

    );

  }



  const pass =

    resolution >= 1.5 &&

    tailingFactor <= 2.0 &&

    plates >= 2000 &&

    pressure <= 400;



  return {


    pass,


    resolution,


    tailingFactor,


    plates,


    retentionTime,


    pressure,


    comments,


    warnings,


    message:

      pass

      ? "System suitability criteria passed."

      : "System suitability requires optimization."

  };

}



export const calculateSystemSuitability =

  predictSystemSuitability;
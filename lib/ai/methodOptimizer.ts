export interface OptimizationResult {

  score: number;

  issues: string[];

  recommendations: string[];

  expectedImprovement: {

    retentionTime: string;

    resolution: string;

  };

}



export function optimizeMethod(

  prediction: any = {},

  method: any = {}

): OptimizationResult {


  const issues: string[] = [];

  const recommendations: string[] = [];



  const retention =
    prediction.retentionTime ?? 2;


  const resolution =
    prediction.resolution ?? 1.5;


  const tailing =
    prediction.tailingFactor ?? 1.5;


  const organic =
    method.organic ?? 50;




  if (retention < 2) {

    issues.push(
      "Retention time is too short"
    );


    recommendations.push(
      "Reduce organic phase to increase retention"
    );

  }




  if (resolution < 1.8) {

    issues.push(
      "Resolution below target"
    );


    recommendations.push(
      "Optimize gradient slope or change selectivity"
    );

  }




  if (tailing > 1.5) {

    issues.push(
      "Peak tailing is elevated"
    );


    recommendations.push(
      "Investigate column condition and sample solvent"
    );

  }




  if (organic > 60) {

    recommendations.push(
      "Consider lowering organic percentage for better retention"
    );

  }




  const score = Math.min(

    100,

    Math.round(

      70 +

      resolution * 8 -

      (tailing - 1) * 10

    )

  );




  return {


    score,


    issues,


    recommendations,


    expectedImprovement: {


      retentionTime:

        retention < 2

          ? `${retention} → ${(retention + 1.5).toFixed(1)} min`

          : `${retention} min`,



      resolution:

        resolution < 2

          ? `${resolution} → ${(resolution + 0.5).toFixed(1)}`

          : `${resolution}`


    }


  };


}
import { Method } from "./retention";


export interface Recommendation {

  title: string;

  message: string;

  priority: "low" | "medium" | "high";

}



export function generateRecommendations(

  method: Method

): Recommendation[] {


  const recommendations: Recommendation[] = [];



  const flow = method.flow ?? 1.0;

  const organic = method.organic ?? 50;

  const pH = method.pH ?? 7;



  if (flow > 1.5) {


    recommendations.push({

      title: "High Flow Rate",

      message:

        "Consider reducing flow rate to improve efficiency and reduce pressure.",

      priority: "medium"

    });


  }



  if (organic > 70) {


    recommendations.push({

      title: "High Organic Content",

      message:

        "Reducing organic percentage may increase retention and improve separation.",

      priority: "medium"

    });


  }



  if (pH < 3) {


    recommendations.push({

      title: "Low pH Condition",

      message:

        "Verify analyte stability and column compatibility under acidic conditions.",

      priority: "low"

    });


  }



  if (recommendations.length === 0) {


    recommendations.push({

      title: "Method Status",

      message:

        "Current method conditions appear acceptable.",

      priority: "low"

    });


  }



  return recommendations;


}
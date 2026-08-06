import {
  CompoundProperties,
  MethodConditions,
  predictRetention,
} from "./retention";

export interface Recommendation {

  title: string;

  reason: string;

  priority: "High" | "Medium" | "Low";

}

export function generateRecommendations(

  compound: CompoundProperties,

  method: MethodConditions

): Recommendation[] {

  const prediction = predictRetention(
    compound,
    method
  );

  const recommendations: Recommendation[] = [];

  if (prediction.k < 2) {

    recommendations.push({

      title: "Increase Retention",

      reason:
        "Retention factor (k) is below the recommended range. Reduce the percentage of organic solvent or lower the column temperature.",

      priority: "High"

    });

  }

  if (prediction.k > 10) {

    recommendations.push({

      title: "Reduce Runtime",

      reason:
        "Retention is excessive. Increase the percentage of organic solvent or increase the flow rate.",

      priority: "Medium"

    });

  }

  if (method.flow > 1.5) {

    recommendations.push({

      title: "Check System Pressure",

      reason:
        "High flow rates may increase backpressure and reduce column lifetime.",

      priority: "Medium"

    });

  }

  if (method.temperature < 25) {

    recommendations.push({

      title: "Increase Column Temperature",

      reason:
        "A higher temperature may improve mass transfer and peak efficiency.",

      priority: "Low"

    });

  }

  if (recommendations.length === 0) {

    recommendations.push({

      title: "Method Looks Good",

      reason:
        "Current conditions fall within a practical operating window.",

      priority: "Low"

    });

  }

  return recommendations;

}
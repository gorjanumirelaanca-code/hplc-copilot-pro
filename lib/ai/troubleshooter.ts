import { Molecule, Method } from "./retentionPredictor";

export interface TroubleshootingResult {

  issue: string;

  possibleCauses: string[];

  recommendations: string[];

}

export function troubleshoot(

  issue: string,

  molecule: Molecule,

  method: Method

): TroubleshootingResult {

  const q = issue.toLowerCase();

  if (q.includes("tail")) {

    return {

      issue: "Peak Tailing",

      possibleCauses: [

        "Incorrect mobile phase pH",

        "Secondary silanol interactions",

        "Column contamination",

        "Sample overload"

      ],

      recommendations: [

        "Adjust pH relative to analyte pKa",

        "Reduce injection amount",

        "Flush or replace column",

        "Try an end-capped C18 column"

      ]

    };

  }

  if (q.includes("retention")) {

    return {

      issue: "Poor Retention",

      possibleCauses: [

        "Organic content too high",

        "Weak stationary phase interaction",

        "Highly polar analyte"

      ],

      recommendations: [

        "Reduce initial % organic",

        "Try HILIC",

        "Optimize mobile phase pH"

      ]

    };

  }

  if (q.includes("pressure")) {

    return {

      issue: "High Pressure",

      possibleCauses: [

        "Blocked frit",

        "Blocked tubing",

        "Dirty column",

        "High-viscosity mobile phase"

      ],

      recommendations: [

        "Disconnect column",

        "Check pressure section-by-section",

        "Replace inlet frit",

        "Flush the system"

      ]

    };

  }

  return {

    issue: "General Optimization",

    possibleCauses: [

      "Multiple chromatographic factors"

    ],

    recommendations: [

      "Evaluate pH",

      "Evaluate organic percentage",

      "Evaluate column chemistry",

      "Evaluate temperature"

    ]

  };

}
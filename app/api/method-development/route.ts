import { NextRequest, NextResponse } from "next/server";

import { recommendMethod } from "@/lib/ai/methodEngine";

export async function POST(
  request: NextRequest
) {

  try {

    const body = await request.json();

    const recommendation =
      recommendMethod(body);

    return NextResponse.json({

      compound:
        body.compound,

      identity: {

        molecularFormula:
          body.molecularFormula,

        molecularWeight:
          body.molecularWeight,

        pubchemCID:
          body.cid

      },

      chromatography: {

        column:
          recommendation.column,

        mode:
          recommendation.mode,

        mobilePhaseA:
          recommendation.mobilePhaseA,

        mobilePhaseB:
          recommendation.mobilePhaseB,

        pH:
          recommendation.pH,

        organic:
          recommendation.organicPercent,

        flowRate:
          recommendation.flowRate,

        temperature:
          recommendation.temperature,

        detection:
          recommendation.detection,

        estimatedRetention:
          recommendation.estimatedRetention

      },

      confidence:
        recommendation.confidence,

      rationale:
        recommendation.rationale,

      startingConditions: {

        injectionVolume:
          "10 µL",

        runTime:
          "10 min"

      }

    });

  }

  catch(error){

    console.error(error);

    return NextResponse.json(

      {
        error:
          "Unable to generate AI method."
      },

      {
        status:500
      }

    );

  }

}
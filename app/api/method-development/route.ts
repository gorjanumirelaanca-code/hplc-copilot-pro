import { NextRequest, NextResponse } from "next/server";
import { recommendMethod } from "@/lib/ai/methodEngine";


export async function POST(

  request: NextRequest

) {


  try {


    const body = await request.json();


    const recommendation = recommendMethod(body);



    return NextResponse.json({

      success:true,


      method:{


        prediction:

          recommendation.prediction,


        score:

          recommendation.score,


        column:

          recommendation.column,


        mobilePhase:

          recommendation.mobilePhase


      }


    });



  } catch(error) {


    return NextResponse.json(

      {

        success:false,

        error:"Method recommendation failed"

      },

      {

        status:500

      }

    );


  }


}
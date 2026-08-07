import { NextRequest, NextResponse } from "next/server";
import { searchCompound } from "@/lib/pubchem";


export async function POST(

  request: NextRequest

) {


  try {


    const body = await request.json();


    const query = body.query;



    if (!query) {


      return NextResponse.json(

        {

          error: "Compound name is required"

        },

        {

          status:400

        }

      );


    }



    const result = await searchCompound(query);



    return NextResponse.json(result);



  } catch(error) {


    return NextResponse.json(

      {

        error:"Failed to search compound"

      },

      {

        status:500

      }

    );


  }


}
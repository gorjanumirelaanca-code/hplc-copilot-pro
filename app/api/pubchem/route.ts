import { NextRequest, NextResponse } from "next/server";

import { searchCompound } from "@/lib/pubchem/search";

export async function POST(
  request: NextRequest
) {

  try {

    const { compound } =
      await request.json();

    if (!compound) {

      return NextResponse.json(
        {
          error: "Compound required"
        },
        {
          status: 400
        }
      );

    }

    const molecule =
      await searchCompound(compound);

    return NextResponse.json(molecule);

  }

  catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error:
          "Unable to retrieve PubChem data."
      },
      {
        status: 500
      }
    );

  }

}
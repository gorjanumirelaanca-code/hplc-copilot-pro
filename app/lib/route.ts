import { NextRequest, NextResponse } from "next/server";
import { searchCompound } from "../../../lib/pubchem";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const result = await searchCompound(body.compound);

    if (!result) {
      return NextResponse.json(
        {
          error: "Compound not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(result);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to retrieve PubChem data.",
      },
      {
        status: 500,
      }
    );

  }
}
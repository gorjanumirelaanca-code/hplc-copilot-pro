"use client";

import { useSession } from "next-auth/react";
import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";


export default function SaveMethodButton() {


  const { data: session } = useSession();


  const { molecule } = useLabStore();


  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();



  async function saveMethod() {


    if (!session?.user?.email) {

      alert("Please login first");

      return;

    }



    const ai = runMethodEngineV3(

      {

        molecularWeight:
          Number(molecule.molecularWeight) || 250,

        logP:
          Number(molecule.xlogP) || 2,

        pKa: 4.5,

        tpsa:
          Number(molecule.tpsa) || 40,

        hBondDonors:
          Number(molecule.hBondDonors) || 1,

        hBondAcceptors:
          Number(molecule.hBondAcceptors) || 2

      },

      {

        organic,

        flow,

        temperature,

        pH

      }

    );



    const response = await fetch("/api/methods", {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        userId: session.user.email,

        name:
          `${molecule.name || "Unknown"} AI Method`,

        compound:
          molecule.name || "Unknown",

        column:
          ai.result.engine.column.column,

        mobilePhase:
          ai.result.pH.buffer,

        pH:
          Number(ai.result.pH.pH),

        gradient:
          `${ai.result.gradient.startB}% → ${ai.result.gradient.endB}%`

      })

    });



    if(response.ok){

      alert("AI Method saved to database ✅");

    }

    else {

      alert("Save failed");

    }


  }



  return (

    <button

      onClick={saveMethod}

      className="w-full rounded-lg bg-green-600 hover:bg-green-700 text-white py-3 font-semibold"

    >

      💾 Save AI Method To Database

    </button>

  );

}
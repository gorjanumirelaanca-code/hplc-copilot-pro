"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { runMethodEngineV3 } from "@/lib/ai";


export default function ProfessionalPDFReport() {


  const { molecule } = useLabStore();


  const {
    organic,
    flow,
    temperature,
    pH
  } = useMethodStore();



  function generatePDF() {


    const ai = runMethodEngineV3(

      {
        molecularWeight: Number(molecule.molecularWeight) || 250,
        logP: Number(molecule.xlogP) || 2,
        pKa: 4.5,
        tpsa: Number(molecule.tpsa) || 40,
        hBondDonors: Number(molecule.hBondDonors) || 1,
        hBondAcceptors: Number(molecule.hBondAcceptors) || 2
      },

      {
        organic,
        flow,
        temperature,
        pH
      }

    );


    const html = `

<html>

<head>

<title>
HPLC Copilot Pro Report
</title>

<style>

body {

font-family: Arial;
padding:40px;

}

.header {

background:#0f172a;
color:white;
padding:25px;

}

.card {

border:1px solid #ddd;
padding:15px;
margin-top:15px;

}

</style>

</head>


<body>


<div class="header">

<h1>
HPLC Copilot Pro™
</h1>

<p>
AI Method Development Report
</p>

</div>



<div class="card">

<h2>
Compound
</h2>

<p>
${molecule.name || "-"}
</p>

<p>
Molecular Weight:
${molecule.molecularWeight || "-"}
</p>

</div>



<div class="card">

<h2>
AI Method Recommendation
</h2>


<p>
Column:
${ai.result.engine.column.column}
</p>


<p>
Buffer:
${ai.result.pH.buffer}
</p>


<p>
pH:
${ai.result.pH.pH}
</p>


<p>
Gradient:
${ai.result.gradient.startB}% →
${ai.result.gradient.endB}%
</p>


</div>




<div class="card">

<h2>
Chromatography Prediction
</h2>


<p>
Retention Time:
${ai.result.engine.prediction.retentionTime} min
</p>


<p>
Resolution:
${ai.result.system.resolution}
</p>


<p>
Tailing:
${ai.result.system.tailingFactor}
</p>


<p>
Method Score:
${ai.result.engine.score}/100
</p>


</div>



<div class="card">

<h2>
AI Interpretation
</h2>


<p>
${ai.summary}
</p>


</div>



</body>

</html>

`;



    const blob = new Blob(

      [html],

      {
        type:"text/html"
      }

    );


    const url = URL.createObjectURL(blob);


    const link = document.createElement("a");

    link.href=url;

    link.download="HPLC_Copilot_Pro_Report.html";

    link.click();


  }



  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Professional AI Report

      </h2>


      <button

        onClick={generatePDF}

        className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-semibold"

      >

        📄 Generate Professional Report

      </button>


    </div>

  );

}
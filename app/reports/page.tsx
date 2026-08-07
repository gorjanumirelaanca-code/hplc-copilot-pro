"use client";

import ProfessionalPDFReport from "@/components/method-development/ProfessionalPDFReport";


export default function ReportsPage(){


  return (

    <main className="max-w-[1900px] mx-auto p-8 space-y-8">


      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-blue-900 text-white p-10">


        <h1 className="text-4xl font-bold">

          AI Reports

        </h1>


        <p className="mt-3 text-blue-200">

          Generate pharmaceutical method development reports

        </p>


      </div>


      <ProfessionalPDFReport />


    </main>

  );

}
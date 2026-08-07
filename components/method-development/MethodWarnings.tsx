"use client";


interface MethodWarningsProps {

  ai?: any;

}



export default function MethodWarnings({

  ai = {}

}: MethodWarningsProps) {


  const system = ai?.system ?? {};

  const warnings =

    system.comments ??

    system.warnings ??

    [];



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        Method Warnings

      </h2>



      {warnings.length === 0 ? (

        <p className="text-green-600">

          No warnings detected.

        </p>

      ) : (

        <ul className="list-disc pl-5 space-y-2">

          {warnings.map(

            (warning: string, index: number) => (

              <li key={index}>

                {warning}

              </li>

            )

          )}

        </ul>

      )}


    </div>

  );

}
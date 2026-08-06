export default function MethodReport({
  result,
}: {
  result: any;
}) {

  return (

    <div className="bg-white rounded-xl border shadow-md p-8 space-y-6">


      <h2 className="text-2xl font-bold">
        🧪 AI HPLC Method Recommendation
      </h2>


      <div className="border rounded-lg p-4">

        <h3 className="font-bold text-lg">
          Compound
        </h3>

        <p>
          {result.compound}
        </p>

      </div>



      <div className="border rounded-lg p-4">

        <h3 className="font-bold text-lg">
          Chemical Identity
        </h3>


        <p>
          Formula:
          {" "}
          {result.identity?.molecularFormula}
        </p>


        <p>
          Molecular Weight:
          {" "}
          {result.identity?.molecularWeight}
        </p>


        <p>
          PubChem CID:
          {" "}
          {result.identity?.pubchemCID}
        </p>

      </div>




      <div className="border rounded-lg p-4">


        <h3 className="font-bold text-lg">
          Chromatographic Conditions
        </h3>


        <p>
          Column:
          {" "}
          {result.chromatography?.column}
        </p>


        <p>
          Mode:
          {" "}
          {result.chromatography?.mode}
        </p>


        <p>
          Mobile Phase:
          {" "}
          {result.chromatography?.mobilePhase}
        </p>


        <p>
          Flow Rate:
          {" "}
          {result.chromatography?.flowRate}
        </p>


        <p>
          Temperature:
          {" "}
          {result.chromatography?.temperature}
        </p>


        <p>
          Detection:
          {" "}
          {result.chromatography?.detection}
        </p>


      </div>




      <div className="border rounded-lg p-4">


        <h3 className="font-bold text-lg">
          Scientific Rationale
        </h3>


        <ul className="list-disc ml-6">

          {
            result.rationale?.map(
              (
                item:string,
                index:number
              ) => (

                <li key={index}>
                  {item}
                </li>

              )
            )
          }

        </ul>


      </div>




      <div className="border rounded-lg p-4">


        <h3 className="font-bold text-lg">
          Starting Conditions
        </h3>


        <p>
          Injection Volume:
          {" "}
          {result.startingConditions?.injectionVolume}
        </p>


        <p>
          Run Time:
          {" "}
          {result.startingConditions?.runTime}
        </p>


      </div>


    </div>

  );

}
"use client";


interface AIKnowledgePanelProps {

  ai?: any;

}



export default function AIKnowledgePanel({

  ai = {}

}: AIKnowledgePanelProps) {


  const engine = ai.engine ?? {};

  const prediction = engine.prediction ?? {};

  const column = engine.column ?? {};

  const mobilePhase = engine.mobilePhase ?? {};



  const insights = [

    {

      title: "Column Strategy",

      text:

        `Use ${column.column ?? "recommended column"} because it matches predicted analyte properties.`

    },


    {

      title: "Retention Behavior",

      text:

        `Predicted retention time is ${prediction.retentionTime ?? "-"} min with selectivity ${prediction.selectivity ?? "-"}.`

    },


    {

      title: "Mobile Phase Strategy",

      text:

        `Recommended organic phase: ${mobilePhase.organic ?? "-"}. Buffer: ${mobilePhase.buffer ?? "-"}.`

    }


  ];



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        AI Knowledge Panel

      </h2>



      <div className="space-y-4">


        {insights.map((item, index) => (

          <div

            key={index}

            className="border rounded-lg p-4"

          >

            <h3 className="font-semibold">

              {item.title}

            </h3>


            <p className="text-sm text-gray-600 mt-1">

              {item.text}

            </p>


          </div>

        ))}


      </div>


    </div>

  );

}
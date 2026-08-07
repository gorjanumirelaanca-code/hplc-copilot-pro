"use client";

import { useMemo } from "react";
import { calculateRetention } from "@/lib/ai/retention";
import { generateRecommendations } from "@/lib/ai/recommendations";


interface AIRecommendationPanelProps {

  compound?: any;

  method?: any;

}



export default function AIRecommendationPanel({

  compound = {},

  method = {}

}: AIRecommendationPanelProps) {



  const retention = useMemo(() => {


    return calculateRetention(

      compound,

      method

    );


  }, [compound, method]);




  const recommendations = useMemo(() => {


    return generateRecommendations(

      method

    );


  }, [method]);




  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-4">

        AI Recommendation Panel

      </h2>



      <div className="space-y-3">


        <div className="bg-slate-50 rounded p-4">


          <h3 className="font-semibold">

            Retention Prediction

          </h3>


          <p>

            Retention Time: {retention.retentionTime} min

          </p>


          <p>

            k': {retention.kPrime}

          </p>


        </div>




        <div className="bg-slate-50 rounded p-4">


          <h3 className="font-semibold">

            Recommendations

          </h3>



          {recommendations.map((item, index) => (


            <div key={index} className="mt-2">


              <p className="font-medium">

                {item.title}

              </p>


              <p className="text-sm text-slate-600">

                {item.message}

              </p>


            </div>


          ))}


        </div>


      </div>


    </div>

  );

}
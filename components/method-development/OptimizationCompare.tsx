"use client";

import { useState } from "react";
import { useMethodStore } from "@/lib/store/useMethodStore";


interface OptimizationCompareProps {

  current?: any;

  optimized?: any;

}



export default function OptimizationCompare({

  current = {},

  optimized = {}

}: OptimizationCompareProps) {


const setOrganic = useMethodStore(

  (state) => state.setOrganic

);


const [applied, setApplied] = useState(false);



const applyOptimization = () => {


  if (optimized.organic) {


    setOrganic(

      optimized.organic

    );


    setApplied(true);


  }


};




return (

<div className="rounded-xl border bg-white shadow p-6">


<h2 className="text-2xl font-bold mb-5">

AI Optimization Compare

</h2>




<div className="grid md:grid-cols-2 gap-5">



<div className="border rounded-lg p-4">


<h3 className="font-semibold mb-3">

Current Method

</h3>



<p>

Organic:

{" "}

<strong>

{current.organic ?? "-"}%

</strong>

</p>



<p>

Retention:

{" "}

<strong>

{current.retentionTime ?? "-"} min

</strong>

</p>



<p>

Score:

{" "}

<strong>

{current.score ?? "-"}/100

</strong>

</p>



</div>






<div className="border rounded-lg p-4 bg-blue-50">


<h3 className="font-semibold mb-3">

AI Optimized Method

</h3>



<p>

Organic:

{" "}

<strong>

{optimized.organic ?? "-"}%

</strong>

</p>



<p>

Expected Retention:

{" "}

<strong>

{optimized.retentionTime ?? "-"} min

</strong>

</p>



<p>

Expected Score:

{" "}

<strong>

{optimized.score ?? "-"}/100

</strong>

</p>




<button

onClick={applyOptimization}

disabled={applied}

className="mt-5 rounded-lg bg-blue-600 text-white px-4 py-2 disabled:bg-green-600"

>


{applied

?

"Optimization Applied ✓"

:

"Apply AI Optimization"

}


</button>



</div>



</div>





{applied && (

<div className="mt-5 rounded-lg bg-green-50 p-4">


<strong>

AI Optimization Applied

</strong>


<p className="text-sm mt-2">

Organic phase updated to {optimized.organic}%.

Recalculate method performance to view new predictions.

</p>


</div>

)}



</div>

);

}
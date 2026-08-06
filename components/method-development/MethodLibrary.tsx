"use client";

import { useEffect, useState } from "react";


interface Method {

  id:string;

  name:string;

  compound:string;

  column:string;

  mobilePhase:string;

  pH:number;

  gradient:string;

  createdAt:string;

}


export default function MethodLibrary(){


  const [methods,setMethods] = useState<Method[]>([]);


  async function loadMethods(){

    const response = await fetch("/api/methods");

    const data = await response.json();

    setMethods(data);

  }



  useEffect(()=>{

    loadMethods();

  },[]);



  return (

    <div className="rounded-xl border shadow bg-white p-6">


      <h2 className="text-2xl font-bold mb-5">

        My AI Method Library

      </h2>



      {methods.length === 0 && (

        <p className="text-slate-500">

          No saved AI methods yet.

        </p>

      )}



      <div className="space-y-4">


        {methods.map((method)=>(


          <div

            key={method.id}

            className="rounded-lg border p-5"

          >


            <div className="flex justify-between">


              <h3 className="font-bold text-lg">

                {method.name}

              </h3>


              <span className="text-sm text-slate-500">

                {new Date(method.createdAt).toLocaleDateString()}

              </span>


            </div>



            <div className="mt-4 grid md:grid-cols-2 gap-3">


              <p>

                <strong>Compound:</strong>{" "}

                {method.compound}

              </p>


              <p>

                <strong>Column:</strong>{" "}

                {method.column}

              </p>


              <p>

                <strong>Mobile Phase:</strong>{" "}

                {method.mobilePhase}

              </p>


              <p>

                <strong>pH:</strong>{" "}

                {method.pH}

              </p>


              <p>

                <strong>Gradient:</strong>{" "}

                {method.gradient}

              </p>


            </div>


          </div>


        ))}


      </div>


    </div>

  );

}
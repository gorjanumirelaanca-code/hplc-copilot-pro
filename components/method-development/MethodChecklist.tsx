"use client";

import { useState } from "react";

export default function MethodChecklist() {

  const [items, setItems] = useState([

    {
      name: "Molecule properties reviewed",
      completed: true
    },

    {
      name: "Column chemistry selected",
      completed: true
    },

    {
      name: "Mobile phase optimized",
      completed: true
    },

    {
      name: "pH strategy evaluated",
      completed: true
    },

    {
      name: "Gradient optimized",
      completed: true
    },

    {
      name: "System suitability verified",
      completed: false
    },

    {
      name: "Robustness evaluated",
      completed: false
    },

    {
      name: "Validation ready",
      completed: false
    }

  ]);


  function toggle(index:number) {

    setItems((previous) =>

      previous.map((item,i)=>

        i === index

          ? {
              ...item,
              completed: !item.completed
            }

          : item

      )

    );

  }


  const completed =
    items.filter(item => item.completed).length;


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        AI Method Readiness Checklist

      </h2>


      <div className="mb-5">

        <div className="flex justify-between mb-2">

          <span>
            Progress
          </span>

          <strong>

            {completed}/{items.length}

          </strong>

        </div>


        <div className="h-3 rounded-full bg-slate-200">

          <div

            className="h-3 rounded-full bg-green-600"

            style={{
              width: `${(completed / items.length) * 100}%`
            }}

          />

        </div>

      </div>


      <div className="space-y-3">

        {items.map((item,index)=>(

          <button

            key={index}

            onClick={() => toggle(index)}

            className="w-full flex justify-between items-center rounded-lg border p-4 text-left"

          >

            <span>

              {item.name}

            </span>


            <span

              className={

                item.completed

                  ? "text-green-600 font-bold"

                  : "text-slate-400"

              }

            >

              {item.completed ? "✓" : "○"}

            </span>


          </button>

        ))}

      </div>


    </div>

  );

}
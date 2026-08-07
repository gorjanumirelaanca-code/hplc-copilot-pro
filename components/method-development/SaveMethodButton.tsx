"use client";


interface SaveMethodButtonProps {

  ai?: any;

}



export default function SaveMethodButton({

  ai = {}

}: SaveMethodButtonProps) {


  const engine = ai?.engine ?? {};

  const column = engine.column ?? {};

  const mobilePhase = engine.mobilePhase ?? {};

  const gradient = ai?.gradient ?? {};



  function saveMethod() {


    const method = {


      column:

        column.column ?? "",


      buffer:

        mobilePhase.buffer ?? "",


      organic:

        mobilePhase.organic ?? "",


      pH:

        Number(mobilePhase.pH ?? 0),


      gradient:

        `${gradient.startB ?? 0}% → ${gradient.endB ?? 0}%`


    };



    localStorage.setItem(

      "hplc-method",

      JSON.stringify(method)

    );


    alert("Method saved successfully.");

  }



  return (

    <button

      onClick={saveMethod}

      className="rounded-lg bg-blue-600 px-4 py-2 text-white"

    >

      Save Method

    </button>

  );

}
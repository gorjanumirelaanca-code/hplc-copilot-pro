"use client";

import MethodLibrary from "@/components/method-development/MethodLibrary";


export default function MethodLibraryPage() {


  return (

    <main className="max-w-[1900px] mx-auto p-8 space-y-8">


      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-blue-900 text-white p-10">


        <h1 className="text-4xl font-bold">

          Method Library

        </h1>


        <p className="mt-3 text-blue-200">

          Your saved AI-generated HPLC methods

        </p>


      </div>


      <MethodLibrary />


    </main>

  );

}
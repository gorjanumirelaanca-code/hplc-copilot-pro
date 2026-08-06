"use client";

import { useState } from "react";

export default function ExportPDFCard() {

  const [status, setStatus] = useState("");

  function exportReport() {

    setStatus("Preparing report...");

    setTimeout(() => {

      window.print();

      setStatus("Report ready");

    }, 500);

  }


  return (

    <div className="rounded-xl border shadow bg-white p-6">

      <h2 className="text-2xl font-bold mb-5">

        Export AI Report

      </h2>


      <p className="text-slate-600 mb-5">

        Create a printable HPLC method development report.

      </p>


      <button

        onClick={exportReport}

        className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold"

      >

        📄 Generate PDF Report

      </button>


      {status && (

        <div className="mt-4 rounded-lg bg-blue-50 p-3">

          {status}

        </div>

      )}


    </div>

  );

}
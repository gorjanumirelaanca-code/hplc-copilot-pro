"use client";

import { useSession } from "next-auth/react";
import Navbar from "@/components/layout/Navbar";


export default function AccountPage() {


  const { data: session } = useSession();


  return (

    <>

      <Navbar />


      <main className="max-w-[1900px] mx-auto p-8 space-y-8">


        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-blue-900 text-white p-10">


          <h1 className="text-4xl font-bold">

            My HPLC Copilot Account

          </h1>


          <p className="mt-3 text-blue-200">

            Manage your AI chromatography workspace

          </p>


        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">



          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-sm text-slate-500">

              User

            </h2>

            <p className="text-xl font-bold mt-2">

              {session?.user?.email || "Guest"}

            </p>

          </div>



          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-sm text-slate-500">

              Subscription

            </h2>

            <p className="text-xl font-bold mt-2">

              Professional

            </p>

          </div>



          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-sm text-slate-500">

              Saved Methods

            </h2>

            <p className="text-4xl font-bold text-blue-600 mt-2">

              0

            </p>

          </div>



          <div className="rounded-xl border shadow bg-white p-6">

            <h2 className="text-sm text-slate-500">

              AI Reports

            </h2>

            <p className="text-4xl font-bold text-blue-600 mt-2">

              0

            </p>

          </div>


        </div>



        <div className="rounded-xl border shadow bg-white p-8">


          <h2 className="text-2xl font-bold mb-5">

            Professional Plan

          </h2>


          <ul className="space-y-3 text-slate-700">


            <li>
              ✅ Unlimited AI method development
            </li>


            <li>
              ✅ Chromatogram simulation
            </li>


            <li>
              ✅ Method optimization engine
            </li>


            <li>
              ✅ AI reports
            </li>


            <li>
              ✅ Saved method library
            </li>


          </ul>



          <button

            className="mt-6 rounded-lg bg-blue-600 text-white px-8 py-3 font-semibold"

          >

            Upgrade Plan

          </button>


        </div>


      </main>


    </>

  );

}
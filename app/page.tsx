"use client";

import Link from "next/link";


export default function HomePage() {


  const features = [

    {
      icon:"🧪",
      title:"AI Method Development",
      text:
      "Generate HPLC method strategies using analyte properties, column chemistry, mobile phase, pH, and gradient optimization."
    },


    {
      icon:"📈",
      title:"Chromatogram Simulator",
      text:
      "Visualize predicted retention, resolution, peak shape, and chromatographic performance."
    },


    {
      icon:"🧠",
      title:"HPLC AI Scientist",
      text:
      "Troubleshoot peak tailing, retention changes, resolution problems, and method challenges."
    },


    {
      icon:"📄",
      title:"AI Method Reports",
      text:
      "Create structured method development reports for documentation and review."
    },


    {
      icon:"📚",
      title:"Method Library",
      text:
      "Save, organize, and manage AI-generated HPLC methods."
    },


    {
      icon:"⚡",
      title:"Optimization Engine",
      text:
      "Compare current conditions with AI-recommended improvements."
    }

  ];



  return (

    <main className="min-h-screen bg-slate-50">


      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white p-10 md:p-20">


        <div className="max-w-6xl mx-auto">


          <h1 className="text-5xl md:text-6xl font-bold">

            HPLC Copilot Pro™

          </h1>


          <p className="mt-6 text-xl text-blue-200 max-w-3xl">

            AI-powered pharmaceutical chromatography platform for
            HPLC method development, troubleshooting, optimization,
            and scientific decision support.

          </p>


          <div className="mt-8 flex gap-4 flex-wrap">


            <Link

              href="/method-development"

              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold"

            >

              Start AI Method Development

            </Link>


            <Link

              href="/assistant"

              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold"

            >

              Ask HPLC AI Scientist

            </Link>


          </div>


        </div>


      </section>




      <section className="max-w-6xl mx-auto p-8 md:p-12">


        <h2 className="text-3xl font-bold text-center mb-10">

          Intelligent HPLC Workflow

        </h2>



        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">


          {features.map((feature,index)=>(


            <div

              key={index}

              className="bg-white rounded-xl shadow border p-6"

            >


              <div className="text-4xl mb-4">

                {feature.icon}

              </div>


              <h3 className="text-xl font-bold">

                {feature.title}

              </h3>


              <p className="mt-3 text-slate-600">

                {feature.text}

              </p>


            </div>


          ))}


        </div>


      </section>




      <section className="max-w-6xl mx-auto p-8">


        <div className="rounded-2xl bg-blue-50 p-8 text-center">


          <h2 className="text-3xl font-bold">

            Develop smarter HPLC methods with AI assistance

          </h2>


          <p className="mt-4 text-slate-600">

            From molecule understanding to method optimization and reporting.

          </p>


          <Link

            href="/method-development"

            className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-bold"

          >

            Open HPLC Copilot Pro

          </Link>


        </div>


      </section>



    </main>

  );

}
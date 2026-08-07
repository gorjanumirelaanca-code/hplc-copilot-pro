"use client";


interface SectionCardProps {

  title: string;

  children: React.ReactNode;

  description?: string;

}



export default function SectionCard({

  title,

  children,

  description

}: SectionCardProps) {


  return (

    <div className="rounded-xl border bg-white shadow-sm p-6">


      <div className="mb-4">


        <h2 className="text-xl font-bold text-slate-800">

          {title}

        </h2>



        {description && (

          <p className="text-sm text-slate-500 mt-1">

            {description}

          </p>

        )}


      </div>



      <div>

        {children}

      </div>



    </div>

  );


}
"use client";


export default function MethodHistory() {


  const history = [

    {
      version: "v1.0",
      date: "Initial method development",
      status: "Created"
    },

    {
      version: "v1.1",
      date: "Optimization performed",
      status: "Improved resolution"
    },

    {
      version: "v1.2",
      date: "Final method review",
      status: "Ready for validation"
    }

  ];



  return (

    <div className="rounded-xl border bg-white shadow p-6">


      <h2 className="text-xl font-bold mb-5">

        Method History

      </h2>



      <div className="space-y-4">


        {history.map((item,index)=>(


          <div

            key={index}

            className="border-l-4 border-blue-600 pl-4"

          >

            <p className="font-bold">

              {item.version}

            </p>


            <p className="text-sm text-slate-600">

              {item.date}

            </p>


            <p className="text-sm text-blue-600">

              {item.status}

            </p>


          </div>


        ))}


      </div>


    </div>

  );

}
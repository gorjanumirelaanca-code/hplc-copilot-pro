"use client";

interface Props {

  organic: number;

  flow: number;

  temperature: number;

}

export default function MethodSummary({

  organic,

  flow,

  temperature

}: Props) {

  const aqueous = 100 - organic;

  const pressure = Math.round(
    120 + flow * 55 + organic * 0.8
  );

  const runtime = (10 / flow).toFixed(1);

  return (

    <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

      <h2 className="text-2xl font-bold mb-6">

        Predicted Method

      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">

          <span>Column</span>

          <strong>C18 150 × 4.6 mm, 5 µm</strong>

        </div>

        <div className="flex justify-between">

          <span>Mobile Phase A</span>

          <strong>Water + 0.1% FA</strong>

        </div>

        <div className="flex justify-between">

          <span>Mobile Phase B</span>

          <strong>Acetonitrile</strong>

        </div>

        <div className="flex justify-between">

          <span>Aqueous</span>

          <strong>{aqueous}%</strong>

        </div>

        <div className="flex justify-between">

          <span>Organic</span>

          <strong>{organic}%</strong>

        </div>

        <div className="flex justify-between">

          <span>Flow</span>

          <strong>{flow.toFixed(1)} mL/min</strong>

        </div>

        <div className="flex justify-between">

          <span>Temperature</span>

          <strong>{temperature} °C</strong>

        </div>

        <div className="flex justify-between">

          <span>Predicted Pressure</span>

          <strong>{pressure} bar</strong>

        </div>

        <div className="flex justify-between">

          <span>Estimated Runtime</span>

          <strong>{runtime} min</strong>

        </div>

      </div>

    </div>

  );

}
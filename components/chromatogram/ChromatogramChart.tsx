"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

import {
  Peak,
  generateChromatogram
} from "@/lib/ai/gaussian";

interface Props {

  peaks: Peak[];

}

export default function ChromatogramChart({

  peaks

}: Props) {

  const data = generateChromatogram(

    peaks,

    10,

    0.02

  );

  return (

    <div className="bg-white rounded-xl shadow border border-slate-200 p-6">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">

          Predicted Chromatogram

        </h2>

        <div className="text-sm text-slate-500">

          Runtime: 10 min

        </div>

      </div>

      <ResponsiveContainer
        width="100%"
        height={450}
      >

        <LineChart
          data={data}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis

            dataKey="time"

            label={{
              value: "Time (min)",
              position: "insideBottom",
              offset: -5
            }}

          />

          <YAxis

            label={{
              value: "Signal",
              angle: -90,
              position: "insideLeft"
            }}

          />

          <Tooltip />

          <Line

            type="monotone"

            dataKey="signal"

            strokeWidth={3}

            dot={false}

            isAnimationActive={true}

          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}
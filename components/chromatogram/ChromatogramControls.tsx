"use client";

interface Props {

  organic: number;

  flow: number;

  temperature: number;

  pH?: number;

  onOrganicChange: (value: number) => void;

  onFlowChange: (value: number) => void;

  onTemperatureChange: (value: number) => void;

  onPHChange?: (value: number) => void;

}

export default function ChromatogramControls({

  organic,

  flow,

  temperature,

  pH = 3.0,

  onOrganicChange,

  onFlowChange,

  onTemperatureChange,

  onPHChange

}: Props) {

  return (

    <div className="bg-white rounded-xl shadow border border-slate-200 p-6 mt-6">

      <h2 className="text-2xl font-bold mb-6">

        Live Method Optimizer

      </h2>

      <div className="space-y-8">

        {/* Organic */}

        <div>

          <div className="flex justify-between mb-2">

            <span>Organic (%)</span>

            <strong>{organic}% ACN</strong>

          </div>

          <input

            type="range"

            min={5}

            max={95}

            value={organic}

            onChange={(e) =>

              onOrganicChange(Number(e.target.value))

            }

            className="w-full"

          />

        </div>

        {/* Flow */}

        <div>

          <div className="flex justify-between mb-2">

            <span>Flow Rate</span>

            <strong>{flow.toFixed(2)} mL/min</strong>

          </div>

          <input

            type="range"

            min={0.2}

            max={2}

            step={0.1}

            value={flow}

            onChange={(e) =>

              onFlowChange(Number(e.target.value))

            }

            className="w-full"

          />

        </div>

        {/* Temperature */}

        <div>

          <div className="flex justify-between mb-2">

            <span>Temperature</span>

            <strong>{temperature} °C</strong>

          </div>

          <input

            type="range"

            min={20}

            max={60}

            value={temperature}

            onChange={(e) =>

              onTemperatureChange(Number(e.target.value))

            }

            className="w-full"

          />

        </div>

        {/* pH */}

        <div>

          <div className="flex justify-between mb-2">

            <span>Mobile Phase pH</span>

            <strong>{pH.toFixed(1)}</strong>

          </div>

          <input

            type="range"

            min={2}

            max={8}

            step={0.1}

            value={pH}

            onChange={(e) =>

              onPHChange?.(Number(e.target.value))

            }

            className="w-full"

          />

        </div>

      </div>

    </div>

  );

}
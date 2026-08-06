"use client";

type Props = {
  flowRate: number;
  setFlowRate: (value: number) => void;
};

export default function SimulatorControls({
  flowRate,
  setFlowRate,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md border p-8">

      <h2 className="text-2xl font-bold mb-8">
        🎛 Simulation Controls
      </h2>

      <div>

        <label className="block font-semibold mb-3">
          Flow Rate
        </label>

        <input
          type="range"
          min={0.5}
          max={2}
          step={0.1}
          value={flowRate}
          onChange={(e) =>
            setFlowRate(Number(e.target.value))
          }
          className="w-full"
        />

        <div className="mt-3 text-blue-700 font-bold text-xl">
          {flowRate.toFixed(1)} mL/min
        </div>

      </div>

    </div>
  );
}
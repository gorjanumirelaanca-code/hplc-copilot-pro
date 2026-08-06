type Props = {
  flowRate: number;
};

export default function SystemSuitabilityCard({
  flowRate,
}: Props) {

  const pressure = Math.round(flowRate * 180);

  const runtime = (12 / flowRate).toFixed(1);

  const resolution =
    (2.4 - (flowRate - 1) * 0.5).toFixed(2);

  const plates = Math.round(
    12000 - Math.abs(flowRate - 1) * 2500
  );

  const tailing = (
    1.05 +
    Math.abs(flowRate - 1) * 0.15
  ).toFixed(2);

  return (

    <div className="bg-white rounded-xl border shadow-md p-8">

      <h2 className="text-2xl font-bold mb-8">
        📊 System Suitability
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between">

          <span>Resolution</span>

          <strong>{resolution}</strong>

        </div>

        <div className="flex justify-between">

          <span>Plate Number</span>

          <strong>{plates}</strong>

        </div>

        <div className="flex justify-between">

          <span>Tailing Factor</span>

          <strong>{tailing}</strong>

        </div>

        <div className="flex justify-between">

          <span>Pressure</span>

          <strong>{pressure} bar</strong>

        </div>

        <div className="flex justify-between">

          <span>Runtime</span>

          <strong>{runtime} min</strong>

        </div>

      </div>

    </div>

  );

}
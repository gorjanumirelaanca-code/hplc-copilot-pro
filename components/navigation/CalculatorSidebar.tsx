import Link from "next/link";

export default function CalculatorSidebar() {
  return (
    <aside className="w-72 bg-white border-r min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-8">
        🧮 HPLC Calculators
      </h2>

      <div className="space-y-8">

        <div>
          <h3 className="font-bold text-gray-700 mb-3">
            Chromatography
          </h3>

          <nav className="space-y-2">

            <Link
              href="/calculator/resolution"
              className="block p-2 rounded hover:bg-slate-100"
            >
              Resolution (Rs)
            </Link>

            <Link
              href="/calculator/capacity-factor"
              className="block p-2 rounded hover:bg-slate-100"
            >
              Capacity Factor
            </Link>

            <Link
              href="/calculator/selectivity"
              className="block p-2 rounded hover:bg-slate-100"
            >
              Selectivity
            </Link>

            <Link
              href="/calculator/plate-number"
              className="block p-2 rounded hover:bg-slate-100"
            >
              Plate Number
            </Link>

            <Link
              href="/calculator/tailing-factor"
              className="block p-2 rounded hover:bg-slate-100"
            >
              Tailing Factor
            </Link>

          </nav>
        </div>

      </div>

    </aside>
  );
}
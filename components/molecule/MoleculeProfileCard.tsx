type Props = {
  profile: {
    polarity: string;
    ionization: string;
    retention: string;
    recommendedColumn: string;
    recommendedPH: string;
    recommendedOrganic: string;
    expectedUV: string;
  };
};

export default function MoleculeProfileCard({
  profile,
}: Props) {
  return (
    <div className="bg-white rounded-xl border shadow-md p-8">

      <h2 className="text-2xl font-bold mb-8">
        🧬 Molecular Intelligence
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <Info
          title="Polarity"
          value={profile.polarity}
        />

        <Info
          title="Ionization"
          value={profile.ionization}
        />

        <Info
          title="Expected Retention"
          value={profile.retention}
        />

        <Info
          title="Column"
          value={profile.recommendedColumn}
        />

        <Info
          title="Recommended pH"
          value={profile.recommendedPH}
        />

        <Info
          title="Organic Modifier"
          value={profile.recommendedOrganic}
        />

        <Info
          title="Expected UV"
          value={profile.expectedUV}
        />

      </div>

    </div>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-slate-50 rounded-lg p-4">

      <div className="text-gray-500 text-sm">
        {title}
      </div>

      <div className="font-bold text-lg mt-2">
        {value}
      </div>

    </div>
  );
}
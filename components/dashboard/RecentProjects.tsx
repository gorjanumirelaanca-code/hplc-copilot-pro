const projects = [
  "Assay Method Validation",
  "Related Substances",
  "Cleaning Validation",
  "Method Development",
  "LC-MS Validation",
];

export default function RecentProjects() {
  return (
    <div className="bg-white rounded-xl shadow-md border p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Recent Projects
      </h2>

      <ul className="space-y-3">
        {projects.map((project) => (
          <li
            key={project}
            className="border-b pb-2 last:border-b-0 text-gray-700"
          >
            🧪 {project}
          </li>
        ))}
      </ul>
    </div>
  );
}
type StatusBadgeProps = {
  status: "PASS" | "WARNING" | "FAIL";
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const styles = {
    PASS: "bg-green-100 text-green-700 border-green-500",
    WARNING: "bg-yellow-100 text-yellow-700 border-yellow-500",
    FAIL: "bg-red-100 text-red-700 border-red-500",
  };

  return (
    <div
      className={`inline-flex items-center px-4 py-2 rounded-lg border-2 font-bold ${styles[status]}`}
    >
      {status}
    </div>
  );
}
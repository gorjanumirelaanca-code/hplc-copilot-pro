export default function AIChat() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-2xl font-bold text-blue-900">
        AI Assistant
      </h2>

      <input
        className="w-full border rounded-lg p-4 mt-4"
        placeholder="Ask anything about HPLC..."
      />

      <button className="bg-blue-700 text-white rounded-lg px-6 py-3 mt-4">
        Ask AI
      </button>
    </div>
  );
}
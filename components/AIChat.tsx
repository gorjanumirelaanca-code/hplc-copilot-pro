export default function AIChat() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">

      <h2 className="text-2xl font-bold text-blue-900 mb-2">
        🤖 AI Assistant
      </h2>

      <p className="text-gray-600 mb-6">
        Ask anything about HPLC, LC-MS, method development or troubleshooting.
      </p>

      <textarea
        className="w-full border rounded-xl p-4 h-40 resize-none"
        placeholder={`Example:

Why is my peak tailing?
How can I improve resolution?
Why is retention changing?`}
      />

      <div className="flex justify-end mt-4">
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold">
          Ask AI
        </button>
      </div>

    </div>
  );
}
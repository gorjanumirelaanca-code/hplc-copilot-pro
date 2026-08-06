"use client";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export default function ChatInput({
  value,
  onChange,
  onSend,
}: ChatInputProps) {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-md">
      <textarea
        className="w-full h-32 resize-none outline-none"
        placeholder="Ask anything about HPLC, UHPLC, LC-MS, method development, validation, troubleshooting..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <div className="flex justify-end mt-4">
        <button
          onClick={onSend}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          🚀 Ask HPLC Copilot
        </button>
      </div>
    </div>
  );
}
type MessageProps = {
  role: "user" | "assistant";
  content: string;
};

export default function Message({
  role,
  content,
}: MessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4`}
    >
      <div
        className={`max-w-3xl rounded-2xl px-5 py-4 shadow ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white border text-slate-800"
        }`}
      >
        <div className="font-semibold mb-2">
          {isUser ? "👤 You" : "🤖 HPLC Copilot"}
        </div>

        <div className="whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}
import Message from "./Message";

const demoMessages = [
  {
    role: "assistant",
    content:
      "Hello! I'm HPLC Copilot Pro. How can I help you today?",
  },
] as const;

export default function ChatWindow() {
  return (
    <div className="bg-slate-50 border rounded-xl p-6 h-[500px] overflow-y-auto">
      {demoMessages.map((message, index) => (
        <Message
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}
    </div>
  );
}
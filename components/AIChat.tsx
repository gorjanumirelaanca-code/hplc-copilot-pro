"use client";

import { useState } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!message.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unknown server error");
      }

      setAnswer(data.answer);
    } catch (err: any) {
      setAnswer(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-xl p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">
        🤖 HPLC Copilot Pro
      </h2>

      <textarea
        className="w-full h-48 border rounded-xl p-4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask anything about HPLC..."
      />

      <button
        onClick={askAI}
        disabled={loading}
        className="mt-4 bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && (
        <div className="mt-6 border rounded-xl p-4 whitespace-pre-wrap">
          {answer}
        </div>
      )}
    </div>
  );
}
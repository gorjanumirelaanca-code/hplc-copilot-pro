"use client";

export default function WelcomeBanner() {

  return (

    <div className="rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white p-8 shadow-lg">

      <h1 className="text-4xl font-bold">

        Welcome to HPLC Copilot Pro

      </h1>

      <p className="mt-3 text-lg text-blue-100">

        AI-powered HPLC and LC-MS method development, optimization,
        troubleshooting, and laboratory decision support.

      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        <div className="bg-white/10 rounded-xl p-4">
          <div className="text-3xl font-bold">25+</div>
          <div className="text-sm">AI Modules</div>
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          <div className="text-3xl font-bold">1000+</div>
          <div className="text-sm">Compounds</div>
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          <div className="text-3xl font-bold">AI</div>
          <div className="text-sm">Method Design</div>
        </div>

        <div className="bg-white/10 rounded-xl p-4">
          <div className="text-3xl font-bold">24/7</div>
          <div className="text-sm">Assistant</div>
        </div>

      </div>

    </div>

  );

}
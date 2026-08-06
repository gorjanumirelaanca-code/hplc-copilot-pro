"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import HomeDashboard from "@/components/method-development/HomeDashboard";
import HPLCAssistant from "@/components/ai/HPLCAssistant";

export default function AIPage() {

  return (

    <Layout>

      <main className="max-w-[1900px] mx-auto p-8 space-y-8">

        <PageHeader
          title="HPLC Copilot Pro AI"
          subtitle="AI Method Development • AI Troubleshooting • AI Laboratory Assistant"
        />

        <HomeDashboard />

        <HPLCAssistant />

      </main>

    </Layout>

  );

}
"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import HPLCAssistant from "@/components/ai/HPLCAssistant";

export default function AssistantPage() {

  return (

    <Layout>

      <main className="max-w-5xl mx-auto p-8">

        <PageHeader
          title="AI HPLC Troubleshooting Assistant"
          subtitle="Ask questions about HPLC method development, chromatography and troubleshooting."
        />

        <HPLCAssistant />

      </main>

    </Layout>

  );

}
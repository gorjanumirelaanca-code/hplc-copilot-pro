"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import AIKnowledgePanel from "@/components/method-development/AIKnowledgePanel";

export default function KnowledgePage() {

  return (

    <Layout>

      <main className="max-w-7xl mx-auto p-8">

        <PageHeader
          title="HPLC Knowledge Center"
          subtitle="AI-powered chromatography guidance"
        />

        <AIKnowledgePanel />

      </main>

    </Layout>

  );

}
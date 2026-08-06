"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import MethodDashboard from "@/components/method-development/MethodDashboard";

export default function MethodDevelopmentPage() {

  return (

    <Layout>

      <main className="max-w-[1900px] mx-auto p-8 space-y-8">

        <PageHeader

          title="AI HPLC Method Development"

          subtitle="Intelligent chromatography workflow powered by HPLC Copilot Pro"

        />

        <MethodDashboard />

      </main>

    </Layout>

  );

}
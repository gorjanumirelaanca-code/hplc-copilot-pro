"use client";

import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/common/PageHeader";
import ChromatogramChart from "@/components/chromatogram/ChromatogramChart";
import ChromatogramControls from "@/components/chromatogram/ChromatogramControls";
import PeakTable from "@/components/chromatogram/PeakTable";
import MethodSummary from "@/components/chromatogram/MethodSummary";
import ResolutionCard from "@/components/chromatogram/ResolutionCard";
import AIRecommendationPanel from "@/components/chromatogram/AIRecommendationPanel";

import { buildChromatogram } from "@/lib/ai/chromatogram";
import { useMethodStore } from "@/lib/store/useMethodStore";
import { useLabStore } from "@/lib/store/useLabStore";

export default function ChromatogramStudio() {

  const { molecule } = useLabStore();

  const {
    organic,
    flow,
    temperature,
    pH,
    setOrganic,
    setFlow,
    setTemperature,
    setPH
  } = useMethodStore();

  const peaks = buildChromatogram({

    molecule: {

      molecularWeight: Number(molecule.molecularWeight) || 200,

      logP: Number(molecule.xlogP) || 2,

      pKa: 4.5,

      tpsa: Number(molecule.tpsa) || 40,

      hBondDonors: Number(molecule.hBondDonors) || 1,

      hBondAcceptors: Number(molecule.hBondAcceptors) || 2

    },

    method: {

      organic,

      flow,

      temperature,

      pH

    }

  });

  return (

    <Layout>

      <main className="max-w-[1800px] mx-auto p-8">

        <PageHeader
          title="Chromatogram Studio"
          subtitle="AI Chromatogram Simulation"
        />

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

          <div className="xl:col-span-3 space-y-8">

            <ChromatogramChart peaks={peaks} />

            <ChromatogramControls
              organic={organic}
              flow={flow}
              temperature={temperature}
              pH={pH}
              onOrganicChange={setOrganic}
              onFlowChange={setFlow}
              onTemperatureChange={setTemperature}
              onPHChange={setPH}
            />

          </div>

          <div className="space-y-8">

            <MethodSummary
              organic={organic}
              flow={flow}
              temperature={temperature}
            />

            <ResolutionCard
              organic={organic}
              flow={flow}
              temperature={temperature}
            />

            <AIRecommendationPanel
              compound={molecule}
              method={{
                organic,
                flow,
                temperature,
                pH
              }}
            />

            <PeakTable peaks={peaks} />

          </div>

        </div>

      </main>

    </Layout>

  );

}
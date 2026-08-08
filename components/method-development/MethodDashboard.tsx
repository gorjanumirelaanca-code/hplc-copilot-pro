"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { runMethodEngine } from "@/lib/ai/methodEngine";

import AIReportHeader from "./AIReportHeader";
import MoleculeCard from "./MoleculeCard";
import MoleculeSearch from "./MoleculeSearch";
import StructureViewer from "./StructureViewer";
import MethodSummary from "./MethodSummary";

import ColumnRecommendation from "./ColumnRecommendation";
import MobilePhaseRecommendation from "./MobilePhaseRecommendation";
import BufferRecommendation from "./BufferRecommendation";
import GradientRecommendation from "./GradientRecommendation";
import MethodConditions from "./MethodConditions";
import RetentionPredictionCard from "./RetentionPredictionCard";
import RunPrediction from "./RunPrediction";
import SystemSuitability from "./SystemSuitability";
import ChromatogramSimulator from "./ChromatogramSimulator";

import MethodScore from "./MethodScore";
import AIConfidence from "./AIConfidence";
import LabReadiness from "./LabReadiness";
import MethodWarnings from "./MethodWarnings";
import AIOptimizer from "./AIOptimizer";
import AIKnowledgePanel from "./AIKnowledgePanel";

import MethodChecklist from "./MethodChecklist";
import MethodDecisionTree from "./MethodDecisionTree";

import ExportPDFCard from "./ExportPDFCard";
import MethodActions from "./MethodActions";


export default function MethodDashboard() {


  const { molecule } = useLabStore();



  const result = runMethodEngine(

    molecule,

    {
      organic: 50,
      flow: 1,
      pH: 6.5
    }

  );



  return (

    <div className="space-y-8">


      <AIReportHeader />


      <MoleculeSearch />



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


        <MoleculeCard />


        <StructureViewer molecule={molecule} />


        <MethodSummary />


      </div>





      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">


        <ColumnRecommendation />


        <MobilePhaseRecommendation />


        <BufferRecommendation />



        <GradientRecommendation

          gradient={result.gradient}

        />



        <MethodConditions />


        <RetentionPredictionCard />


        <RunPrediction />



        <SystemSuitability

          molecule={molecule}

          organic={50}

          flow={1}

          temperature={30}

        />



        <ChromatogramSimulator />



        <MethodScore

          score={result.score}

          prediction={result.prediction}

        />



        <AIConfidence

          confidence={Math.round(result.score)}

        />



        <LabReadiness

          ai={{

            engine: result,

            system: {

              pass: true

            }

          }}

        />



        <MethodWarnings />



        <AIOptimizer

          ai={{

            engine: result,

            system: {

              pressure: 250

            }

          }}

        />



        <AIKnowledgePanel

          ai={{

            engine: result

          }}

        />


      </div>





      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">


        <MethodChecklist />


        <MethodDecisionTree />


      </div>





      <ExportPDFCard />


      <MethodActions />


    </div>

  );

}
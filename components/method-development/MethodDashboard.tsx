"use client";

import { useLabStore } from "@/lib/store/useLabStore";
import { useMethodStore } from "@/lib/store/useMethodStore";

import { runMethodEngine } from "@/lib/ai/methodEngine";
import { optimizeMethod } from "@/lib/ai/methodOptimizer";


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

import AIOptimizationReport from "./AIOptimizationReport";
import OptimizationCompare from "./OptimizationCompare";
import ChromatogramComparison from "./ChromatogramComparison";

import MethodChecklist from "./MethodChecklist";
import MethodDecisionTree from "./MethodDecisionTree";

import ExportPDFCard from "./ExportPDFCard";
import MethodActions from "./MethodActions";


export default function MethodDashboard() {


const { molecule } = useLabStore();


const {

  organic,

  flow,

  pH,

  temperature

} = useMethodStore();




const result = runMethodEngine(

  molecule,

  {

    organic,

    flow,

    pH

  }

);




const optimization = optimizeMethod(

  result.prediction,

  {

    organic,

    flow

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

      organic={organic}

      flow={flow}

      temperature={temperature}

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

          pass:true

        }

      }}

    />



    <AIOptimizer

      ai={{

        engine: result,

        system: {

          pressure:250

        }

      }}

    />



    <AIOptimizationReport

      optimization={optimization}

    />



    <OptimizationCompare

      current={{

        organic,

        retentionTime:

          result.prediction.retentionTime,

        score:

          result.score

      }}

      optimized={{

        organic:40,

        retentionTime:

          optimization.expectedImprovement.retentionTime,

        score:

          optimization.score + 5

      }}

    />



    <ChromatogramComparison

      current={{

        organic,

        retentionTime:

          result.prediction.retentionTime,

        resolution:

          result.prediction.resolution

      }}

      optimized={{

        organic:40,

        retentionTime:

          optimization.expectedImprovement.retentionTime,

        resolution:

          optimization.score

      }}

    />



    <AIKnowledgePanel

      ai={{

        engine: result

      }}

    />



    <MethodWarnings />


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
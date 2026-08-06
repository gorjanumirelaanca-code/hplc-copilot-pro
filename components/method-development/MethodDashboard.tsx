"use client";

import AIReportHeader from "./AIReportHeader";
import MoleculeCard from "./MoleculeCard";
import StructureViewer from "./StructureViewer";
import MethodSummary from "./MethodSummary";
import ColumnRecommendation from "./ColumnRecommendation";
import MobilePhaseRecommendation from "./MobilePhaseRecommendation";
import BufferRecommendation from "./BufferRecommendation";
import GradientRecommendation from "./GradientRecommendation";
import MethodConditions from "./MethodConditions";
import RunPrediction from "./RunPrediction";
import RetentionPredictionCard from "./RetentionPredictionCard";
import SystemSuitability from "./SystemSuitability";
import MethodScore from "./MethodScore";
import AIConfidence from "./AIConfidence";
import AIOptimizer from "./AIOptimizer";
import AIKnowledgePanel from "./AIKnowledgePanel";
import LabReadiness from "./LabReadiness";
import MethodWarnings from "./MethodWarnings";
import MethodChecklist from "./MethodChecklist";
import MethodDecisionTree from "./MethodDecisionTree";
import ExportPDFCard from "./ExportPDFCard";
import MethodActions from "./MethodActions";

export default function MethodDashboard() {

  return (

    <div className="space-y-8">


      <AIReportHeader />


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        <MoleculeCard />

        <StructureViewer />

        <MethodSummary />

      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <ColumnRecommendation />

        <MobilePhaseRecommendation />

        <BufferRecommendation />

        <GradientRecommendation />

        <MethodConditions />

        <RetentionPredictionCard />

        <RunPrediction />

        <SystemSuitability />

        <MethodScore />

        <AIConfidence />

        <LabReadiness />

        <MethodWarnings />

        <AIOptimizer />

        <AIKnowledgePanel />

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
export type WorkflowStep =
  | "lookup"
  | "analyze"
  | "method"
  | "simulate"
  | "optimize"
  | "report";

export interface WorkflowState {
  compound?: string;
  molecularWeight?: number;
  methodGenerated: boolean;
  chromatogramGenerated: boolean;
  optimized: boolean;
  reportGenerated: boolean;
}

export function createWorkflow(): WorkflowState {
  return {
    methodGenerated: false,
    chromatogramGenerated: false,
    optimized: false,
    reportGenerated: false,
  };
}

export function nextStep(
  state: WorkflowState
): WorkflowStep {

  if (!state.compound)
    return "lookup";

  if (!state.methodGenerated)
    return "method";

  if (!state.chromatogramGenerated)
    return "simulate";

  if (!state.optimized)
    return "optimize";

  if (!state.reportGenerated)
    return "report";

  return "report";
}
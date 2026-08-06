export interface Project {

  molecule: boolean;

  method: boolean;

  chromatogram: boolean;

  optimization: boolean;

  troubleshooting: boolean;

  report: boolean;

}

export function defaultProject(): Project {

  return {

    molecule: false,

    method: false,

    chromatogram: false,

    optimization: false,

    troubleshooting: false,

    report: false,

  };

}

export function projectProgress(
  project: Project
) {

  const completed = Object.values(project)
    .filter(Boolean).length;

  return Math.round(
    completed /
    Object.keys(project).length *
    100
  );

}
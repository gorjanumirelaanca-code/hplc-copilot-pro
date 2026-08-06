export interface DashboardStats {

  projects: number;

  methods: number;

  compounds: number;

  chromatograms: number;

}

export function getDashboardStats(): DashboardStats {

  return {

    projects: 1,

    methods: 0,

    compounds: 0,

    chromatograms: 0

  };

}